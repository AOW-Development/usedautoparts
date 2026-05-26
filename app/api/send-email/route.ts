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
  } catch (error) {
    console.error("[send-email] ❌ Email failed:", error);
    // Still return 200 so the frontend always redirects to /thank-you
    return NextResponse.json({ success: false, message: "Email failed" });
  }
}
