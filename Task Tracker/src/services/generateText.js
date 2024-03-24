// methode 1 : too many requests
import { GoogleGenerativeAI } from "@google/generative-ai";
const ai = new GoogleGenerativeAI("api key");

export const generateText = async (prompt) => {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text;
  } catch (error) {
    console.error("Error generating text:", error);
  } finally {
    console.log("Text generation completed");
  }
};
