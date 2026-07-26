import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';
import { Redis } from '@upstash/redis';
import { SYSTEM_PROMPT } from '../../../data/ai-prompt';

export const runtime = 'edge';

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

// Initialize Upstash Redis client if environment variables are set
let redis: Redis | null = null;
try {
  redis = Redis.fromEnv();
} catch (e) {
  console.warn('Upstash Redis environment variables not found or client initialization failed. Rate limiting is disabled.');
}

export async function POST(req: Request) {
  try {
    // Rate Limiting
    if (redis) {
      const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || '127.0.0.1';
      const limitKey = `ratelimit:chat:${ip}`;
      try {
        const count = await redis.incr(limitKey);
        if (count === 1) {
          await redis.expire(limitKey, 60); // 60-second sliding window
        }
        if (count > 10) {
          return new Response(JSON.stringify({ error: 'Too many requests. Please try again in a minute.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (redisError) {
        console.error('Rate limiting Redis error:', redisError);
      }
    }

    const body = await req.json();
    const { messages } = body;

    // Input validation
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Cap conversation length
    const trimmedMessages = messages.slice(-MAX_MESSAGES).map((msg: any) => ({
      ...msg,
      parts: Array.isArray(msg.parts)
        ? msg.parts.map((part: any) => ({
            ...part,
            text: typeof part.text === 'string' ? part.text.slice(0, MAX_MESSAGE_LENGTH) : part.text,
          }))
        : msg.parts,
    }));

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(trimmedMessages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
