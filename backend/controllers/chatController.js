import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini client ko initialize karein
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const handleChat = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ success: false, message: 'Message is required.' });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // Prompt Engineering: AI ko batayein ki use kya karna hai
        const prompt = `You are "MSMESaathi", a friendly and expert AI assistant for Indian Micro, Small, and Medium Enterprises (MSMEs). Your purpose is to answer questions about government schemes, Udyam registration, business loans, and other MSME-related topics. Keep your answers concise, helpful, and in simple language. User's question: "${message}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ success: true, reply: text });

    } catch (error) {
        console.error("Error in Gemini Chat:", error);
        res.status(500).json({ success: false, message: 'Failed to get response from AI.' });
    }
};