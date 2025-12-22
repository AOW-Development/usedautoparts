// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { openai } from "@/lib/openai";

// export async function POST(req: Request) {
//   const { conversationId, message } = await req.json();

//   if (!conversationId || !message) {
//     return NextResponse.json(
//       { error: "Missing data" },
//       { status: 400 }
//     );
//   }

//   await prisma.message.create({
//     data: {
//       conversationId,
//       role: "user",
//       content: message,
//     },
//   });

//   const history = await prisma.message.findMany({
//     where: { conversationId },
//     orderBy: { createdAt: "asc" },
//     select: { role: true, content: true },
//   });

//   const completion = await openai.chat.completions.create({
//     model: "gpt-4.1",
//     messages: history,
//   });

//   const reply = completion.choices[0].message.content ?? "";

//   await prisma.message.create({
//     data: {
//       conversationId,
//       role: "assistant",
//       content: reply,
//       model: completion.model,
//       tokensUsed: completion.usage?.total_tokens,
//     },
//   });

//   return NextResponse.json({ reply });
// }
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { geminiModel } from "@/lib/gemini";

export async function POST(req: Request) {
  const { conversationId, message } = await req.json();

  if (!conversationId || !message) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  // 1️⃣ Save user message
  await prisma.message.create({
    data: {
      conversationId,
      role: "user",
      content: message,
    },
  });

  // 2️⃣ Fetch history
  const history = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: "asc" },
    select: { role: true, content: true },
  });

  // 3️⃣ Convert history → prompt
  const prompt = history
    .map(m => `${m.role.toUpperCase()}: ${m.content}`)
    .join("\n");

  // 4️⃣ Call Gemini SDK
  const result = await geminiModel.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const reply =
    result.response.candidates?.[0]?.content?.parts?.[0]?.text ??
    "No response";

  // 5️⃣ Save assistant reply
  await prisma.message.create({
    data: {
      conversationId,
      role: "assistant",
      content: reply,
      model: "gemini-2.5-flash",
    },
  });

  return NextResponse.json({ reply });
}
