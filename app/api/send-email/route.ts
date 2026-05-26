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

  // Run email + leads API fully in parallel and independently.
  // Promise.allSettled NEVER throws — both always run regardless of the other.
  const [emailResult, leadResult] = await Promise.allSettled([
    // ── 1. Send email notification ──────────────────────────────────────────
    sendEmail(body),

    // ── 2. Save lead to backend DB ──────────────────────────────────────────
    (async () => {
      const baseUrl = process.env.LEADS_API_URL;

      if (!baseUrl) {
        throw new Error("LEADS_API_URL not set in env");
      }

      const payload = {
        lead_source: "W-UCPC",
        created_by: "System",
        created_date: new Date().toISOString().split("T")[0],
        customer_name: body.name,
        email: body.email,
        mobile: body.phone,
        zipcode: body.zip_code,
        make: body.make,
        model: body.model,
        year: body.year,
        part: body.part,
        specification: body.engine_size,
        engine_type: body.transmission,
        status: "New",
      };

      const res = await fetch(`${baseUrl}/api/leads/manual`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Leads API ${res.status}: ${text}`);
      }

      return res.json();
    })(),
  ]);

  // ── Log results server-side (visible in Vercel / Amplify function logs) ──
  if (emailResult.status === "rejected") {
    console.error("[send-email] ❌ Email failed:", emailResult.reason);
  } else {
    console.log("[send-email] ✅ Email sent");
  }

  if (leadResult.status === "rejected") {
    console.error("[send-email] ❌ Leads API failed:", leadResult.reason);
  } else {
    console.log("[send-email] ✅ Lead saved to DB");
  }

  // Always return 200 — the user should always reach /thank-you.
  // Check server logs to diagnose individual failures.
  return NextResponse.json({
    success: true,
    email: emailResult.status === "fulfilled" ? "sent" : "failed",
    lead: leadResult.status === "fulfilled" ? "saved" : "failed",
  });
}
