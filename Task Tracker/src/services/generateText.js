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

const fetchData = async () => {
  const prompt = `Think you are a mom who has ${age} years old ${gender} in ${country}. your child's favourite things are ${hobbies}.You are a caring mother about your 
  children and you have to tell a wonderful story for your child every single night. so generate a bedtime story for the chield bease on child's favourite things, country, age.
  also end of the story you have to give some advice for kids to be good and do good for the sociaty. Also motivate them to belive themselefs`;
};
