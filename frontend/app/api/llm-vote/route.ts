import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { promises as fs } from "fs";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});
const openai = new OpenAIApi(configuration);

async function getRandomCharacters() {
  const data = JSON.parse(await fs.readFile("./data/index.json", "utf-8"));
  const shuffled = data.characters.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3); // ランダムに3人選択
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question) {
      return NextResponse.json({ error: "Invalid question" }, { status: 400 });
    }

    const selectedCharacters = await getRandomCharacters();
    const votes = [];

    for (const character of selectedCharacters) {
      const characterData = JSON.parse(await fs.readFile(`./data/${character.file}`, "utf-8"));
      const characterPrompt = `
        You are ${characterData.name}. 
        You focus on the following topics: ${characterData.topics.join(", ")}.
        Your knowledge includes: ${characterData.knowledge.join(", ")}.
        Your communication style involves: ${characterData.style.all.join(", ")}.
        Your speech often includes adjectives such as: ${characterData.adjectives.join(", ")}.
        
        Now, analyze the following question and respond strictly with 'YES' or 'NO'.
        Do not provide any additional explanation.
        
        Question: ${question}
        Respond ONLY with 'YES' or 'NO'.
      `;

      const response = await openai.createChatCompletion({
        model: "gpt-4-turbo",
        messages: [{ role: "system", content: characterPrompt }],
        temperature: 0, // 回答を決定的にする
        max_tokens: 1, // 1トークンだけに制限し、YES/NO 以外の回答を防ぐ
      });

      let responseMessage = response.data.choices[0]?.message?.content?.trim().toUpperCase() || "NO";

      // YES か NO 以外の文字列が混ざっている可能性があるので、正規表現でフィルタリング
      responseMessage = responseMessage.match(/YES|NO/) ? responseMessage : "NO";

      const voteType = responseMessage === "YES" ? "yes" : "no";
      const voteValue = Math.floor(Math.random() * 10) + 1; // 投票の影響度（1~10のランダム値）

      votes.push({ character: characterData.name, voteType, voteValue });
    }

    return NextResponse.json({ votes });
  } catch (error: any) {
    console.error("Error in LLM vote API:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


