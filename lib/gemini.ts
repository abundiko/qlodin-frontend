import { GoogleGenerativeAI } from "@google/generative-ai"; // https://aistudio.google.com/apikey

// Initialize Gemini SDK
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

export type UsernameSuggestionParams = {
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  gender?: string;
};

async function suggestUsernames({
  firstName,
  lastName,
  email,
  dob,
  gender,
}: UsernameSuggestionParams) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate suggestions using Gemini's text generation capabilities
    const result = await model.generateContent(
      `Suggest 6 unique usernames based on the following information: 
          First Name: ${firstName}
          Last Name: ${lastName}
          Email: ${email}
          Gender: ${gender}
          Date of Birth: ${dob} 
          
          Usernames should be:
          * Short and memorable
          * Easy to type and pronounce
          * Include only lowercase, numbers or underscore
          * Avoid common words or phrases
          
          DO NOT ADD ANYTHING ELSE, ONLY RESPOND WITH THE 5 USER NAMES, NO NUMBERING OR EXPLANATION. RETURN JUST ONE COMMA SEPERATED LINE
          DO NOT INCLUDE ANY OPTION THAT HAS VALUE OF 'undifined' WHILE GENERATING NAMES
          `
    );

    // Extract suggested usernames from the response
    const usernames = result.response
      .text()
      .split(",")
      .map((line) => line.trim());

    return usernames;
  } catch (error) {
    console.error("Error generating usernames:", error);
    return [];
  }
}

export const GeminiService = {
  suggestUsernames,
};

// async function start() {
//   console.log(
//     await GeminiService.suggestUsernames({
//       firstName: "big boy",
//       lastName: "lexy",
//     })
//   );
// }

// start();
