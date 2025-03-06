import { getErrorMessage } from "@/lib/utils";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY,

        baseURL : "https://openrouter.ai/api/v1"
     });

    const systemMessage  : ChatCompletionMessageParam = {
        role : "system",
        content : "You are a helpful assistant. You are here to help me with my queries."
    }

    const response = await openAi.chat.completions.create({
        model : "deepseek/deepseek-r1:free",
        stream : true,
        messages : [systemMessage,...messages]
    })

    const stream = OpenAIStream(response);

  } catch (e) {
    return Response.json({ error: getErrorMessage(e) });
  }
}


