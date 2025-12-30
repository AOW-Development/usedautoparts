import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is missing");
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const MODEL_NAME = "gpt-5-mini";

export async function POST(req: Request) {
  try {
    console.log("🔵 API called - Starting chat");

    const { messages } = await req.json();
    console.log("📨 Received messages:", messages?.length || 0);

    // ✅ Session ID (persist across messages)
    const sessionId = messages?.[0]?.sessionId || uuidv4();

    // ✅ System prompt
    const systemPrompt = `
You are a sales chatbot for a used auto parts website.

Goals:
- Identify required auto part (engine, transmission, etc.)
- Identify vehicle details if mentioned
- Collect email and phone naturally
- Be short, friendly, and professional

IMPORTANT:
If new lead info is detected, append this JSON at the END of your response:

<LEAD_UPDATE>
{
  "part": "",
  "make": "",
  "model": "",
  "year": "",
  "email": "",
  "phone": ""
}
</LEAD_UPDATE>

Only include newly discovered fields.
Do NOT explain the JSON.
`.trim();

    // ✅ Convert frontend messages to OpenAI format
    const chatMessages = [
      { role: "system", content: systemPrompt },
      ...(messages || []).map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      })),
    ];

    // ✅ Call OpenAI (NO temperature — not supported by GPT-5-mini)
    const response = await openai.responses.create({
      model: MODEL_NAME,
      input: chatMessages,
    });

    // ✅ Safely extract text
    const rawText =
      response.output_text ??
      response.output?.[0]?.content?.find((c: any) => c.type === "output_text")
        ?.text ??
      "Sorry, I couldn't process that.";

    console.log("✅ Raw response:", rawText.substring(0, 200));

    // ✅ Extract lead update JSON
    const match = rawText.match(/<LEAD_UPDATE>([\s\S]*?)<\/LEAD_UPDATE>/);
    let leadUpdate: any = null;
    let savedLead: any = null;
    let isNewLead = false;

    if (match) {
      try {
        leadUpdate = JSON.parse(match[1]);
        console.log("💾 Lead extracted:", leadUpdate);

        const dataToSave: any = {
          sessionId,
          message: messages?.[messages.length - 1]?.content || "Chat lead",
        };

        if (leadUpdate.part?.trim()) dataToSave.part = leadUpdate.part;
        if (leadUpdate.make?.trim()) dataToSave.make = leadUpdate.make;
        if (leadUpdate.model?.trim()) dataToSave.model = leadUpdate.model;
        if (leadUpdate.year?.trim()) dataToSave.year = leadUpdate.year;
        if (leadUpdate.email?.trim()) dataToSave.email = leadUpdate.email;
        if (leadUpdate.phone?.trim()) dataToSave.phone = leadUpdate.phone;

        // ✅ Upsert by sessionId
        const existingLead = await prisma.lead.findUnique({
          where: { sessionId },
        });

        if (existingLead) {
          savedLead = await prisma.lead.update({
            where: { sessionId },
            data: dataToSave,
          });
          console.log("🔄 Lead UPDATED:", savedLead.id);
        } else {
          savedLead = await prisma.lead.create({
            data: dataToSave,
          });
          isNewLead = true;
          console.log("✅ NEW Lead CREATED:", savedLead.id);
        }
      } catch (err) {
        console.error("❌ Lead parse error:", err);
      }
    }

    // ✅ Remove JSON block before replying to user
    const cleanReply = rawText
      .replace(/<LEAD_UPDATE>[\s\S]*?<\/LEAD_UPDATE>/g, "")
      .trim();

    return NextResponse.json({
      reply: cleanReply || "How can I help you find the right part?",
      leadUpdate,
      saved: !!savedLead,
      sessionId,
      isNewLead,
    });
  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
