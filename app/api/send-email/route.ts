import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  let body: any;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }

  try {
    await sendEmail(body);
    console.log("[send-email] ✅ Email sent");
    return NextResponse.json({ success: true });
  } catch (error: any) {
    // Log full error + expose the message in response so it's visible in network tab
    const errorMessage = error?.message || String(error);
    console.error("[send-email] ❌ Email failed:", errorMessage);
    return NextResponse.json({
      success: false,
      message: "Email failed",
      error: errorMessage, // visible in network tab → Response for debugging
    });
  }
}
