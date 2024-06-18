import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  try {
    const { userId, prompt, tag } = await req.json();
    console.log({ userId, prompt, tag });

    if (!userId || !prompt) {
      return new Response("Missing required fields", { status: 400 });
    }

    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (e) {
    console.error(e);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
