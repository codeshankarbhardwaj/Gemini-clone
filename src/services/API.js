import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(query) {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: query,
  });

  return response.text;
}