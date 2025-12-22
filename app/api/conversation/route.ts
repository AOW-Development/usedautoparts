import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const conversation = await prisma.conversation.create({
      data: {
        title: "New Chat",
        systemPrompt: "You are a helpful assistant",
      },
    });

    return NextResponse.json(conversation, { status: 201 });
  } catch (error) {
    console.error("Create conversation error:", error);

    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 500 }
    );
  }
}
