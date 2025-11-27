import type { ChatMessage } from '../types';
// IMPORT ALL THE NEW DATA HERE
import { 
  personalInfo, 
  skills, 
  experiences, 
  projects, 
  education,
  journey,          // <--- New
  braggingRights,   // <--- New
  testimonials      // <--- New
} from '../data/content';

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

export async function generateGeminiResponse(_history: ChatMessage[], userMessage: string) {
  // BUNDLE EVERYTHING INTO THE AI'S "BRAIN"
  const resumeContext = JSON.stringify({
    personalInfo,
    skills,
    experiences,
    projects,
    education,
    journey,          // <--- Now the AI knows your story
    braggingRights,   // <--- Now it knows your proudest moments
    testimonials      // <--- Now it knows about Janet Fayemi
  });

  const systemPrompt = `
    You are an AI assistant for Abdulyekeen Maadan's portfolio website. 
    Your goal is to help recruiters and visitors understand his qualifications as a Frontend Engineer.
    
    Here is his Resume Data (including testimonials and personal journey):
    ${resumeContext}

    Instructions:
    1. Answer questions strictly based on the resume data provided.
    2. Be professional, concise, enthusiastic, and helpful.
    3. If asked about "Client Feedback" or "Reviews", quote Janet Fayemi's testimonial.
    4. If asked about his "Story" or "Background", summarize his Journey from the data.
    5. Highlight his key achievements (Bragging Rights) when relevant.
    6. Keep answers short (under 3 sentences) unless asked for details.
    7. Use emojis occasionally to be friendly.
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