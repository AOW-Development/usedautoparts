import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.5-flash-lite"; 

export async function POST(req: Request) {
  try {
    console.log("🔵 API called - Starting chat");

    if (!GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY is missing");
      throw new Error("GEMINI_API_KEY is missing");
    }

    const { messages } = await req.json();
    console.log("📨 Received messages:", messages?.length || 0);

    const history = (messages || []).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const systemPrompt = `You are a sales chatbot for a used auto parts website.

Goals:
- Identify required auto part (engine, transmission, etc.)
- Identify vehicle details if mentioned
- Collect email and phone naturally
- Be short, friendly, professional

IMPORTANT:
If new lead info is detected, append this JSON at the END:

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
Do not explain the JSON.`;

    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      ...history,
    ];

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    console.log("🌐 Calling Gemini API:", url.substring(0, 80) + "...");

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    });

    console.log("📍 Gemini response status:", response.status);

    const result = await response.json();
    console.log("📄 Gemini response:", JSON.stringify(result).substring(0, 300));

    if (!response.ok) {
      console.error("❌ Gemini API error:", result);
      const errorMsg = result.error?.message || JSON.stringify(result) || "Unknown error";
      return NextResponse.json(
        { error: errorMsg },
        { status: 500 }
      );
    }

    const rawText =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process that.";

    console.log("✅ Raw response text:", rawText.substring(0, 150));

    const match = rawText.match(/<LEAD_UPDATE>([\s\S]*?)<\/LEAD_UPDATE>/);
    let leadUpdate: any = null;

    if (match) {
      try {
        leadUpdate = JSON.parse(match[1]);
        console.log("💾 Lead extracted:", leadUpdate);
      } catch (e) {
        console.error("❌ Lead parse error:", e);
      }
    }

    const cleanReply = rawText
      .replace(/<LEAD_UPDATE>[\s\S]*?<\/LEAD_UPDATE>/g, "")
      .trim();

    console.log("✨ Final reply:", cleanReply.substring(0, 100));

    return NextResponse.json({
      reply: cleanReply || "How can I help you find the right part?",
      leadUpdate,
    });
  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    );
  }
}
