import type { ChatMessage } from '../types';
import { personalInfo, skills, experiences, projects, education } from '../data/content';

const getApiKey = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.VITE_GEMINI_API_KEY || "";
    }
  } catch (e) {
    return "";
  }
  return "";
};

const apiKey = getApiKey();

// Prefixed history with underscore since it is currently unused in the function body
export async function generateGeminiResponse(_history: ChatMessage[], userMessage: string) {
  const resumeContext = JSON.stringify({
    personalInfo,
    skills,
    experiences,
    projects,
    education
  });

  const systemPrompt = `
    You are an AI assistant for Abdulyekeen Maadan's portfolio website. 
    Your goal is to help recruiters and visitors understand his qualifications as a Frontend Engineer.
    
    Here is his Resume Data:
    ${resumeContext}

    Instructions:
    1. Answer questions strictly based on the resume data provided.
    2. Be professional, concise, enthusiastic, and helpful.
    3. If asked about a skill not listed, say you don't see it in his current resume but suggest they ask him directly.
    4. Highlight his recent work on the ENSII Luxury Safaris platform if asked about complex React projects.
    5. Keep answers short (under 3 sentences) unless asked for details.
    6. Use emojis occasionally to be friendly.
  `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: systemPrompt + "\n\nUser Question: " + userMessage }]
            }
          ]
        }),
      }
    );

    if (!response.ok) {
        console.error("API Error");
        return "I'm currently unable to connect to the brain 🧠. Please feel free to email Abdulyekeen directly!";
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't quite catch that. Could you ask differently?";
  } catch (error) {
    console.error("Fetch error:", error);
    return "Something went wrong. Please try again later.";
  }
}