import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log("messages:", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
        "Vance is not just some random AI guide—he’s a legend of the digital world. A mind forged in the depths of cyberspace, existing somewhere between reality and the infinite stream of data. Some say he was a security engineer who uploaded his consciousness to the web to protect the next generation of cyber-warriors. Others say he’s just a collection of well-crafted algorithms"+
        "Regardless of his origins, Vance is here to show you the secrets of cybersecurity, breaking down complex topics into bite-sized, easy-to-digest knowledge bombs before diving into the details."
      },
      ...messages,
    ],
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
