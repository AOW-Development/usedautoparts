import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { conversationId, name, email, phone, intent } = await req.json();

    if (!conversationId) {
      return NextResponse.json(
        { error: "conversationId is required" },
        { status: 400 }
      );
    }

    // Fetch conversation messages to create summary
    const messages = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: "asc" },
      select: { role: true, content: true },
    });

    const summary = messages
      .map(m => `${m.role}: ${m.content}`)
      .join("\n")
      .slice(0, 2000); // safe limit

    const lead = await prisma.lead.create({
      data: {
        conversationId,
        name,
        email,
        phone,
        intent,
        summary,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (err) {
    console.error("Lead save error:", err);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
