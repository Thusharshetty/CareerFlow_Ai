const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const modelNames = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash-001",
    "gemini-1.5-flash-002",
    "gemini-1.5-pro",
    "gemini-1.5-pro-latest",
    "gemini-1.0-pro",
    "gemini-pro",
    "gemini-2.0-flash-exp", 
    "gemini-2.0-flash" 
];

async function testModels() {
    console.log("🔍 Testing models with your API Key...\n");

    for (const modelName of modelNames) {
        process.stdout.write(`Testing ${modelName}... `);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hello");
            const response = await result.response;
            console.log(`✅ SUCCESS! (Use this name)`);
            console.log(`-----------------------------------`);
            console.log(`👉 UPDATE YOUR CODE TO USE: "${modelName}"`);
            console.log(`-----------------------------------`);
            return; // Stop after finding the first working one
        } catch (error) {
            if (error.message.includes("404")) {
                console.log("❌ Not Found (404)");
            } else if (error.message.includes("429")) {
                console.log("⚠️ Quota Exceeded (429)");
            } else {
                console.log(`❌ Error: ${error.message.split('[')[0]}`); // Print short error
            }
        }
    }
    console.log("\n❌ No working models found. Please create a NEW API Key in Google AI Studio.");
}

testModels();