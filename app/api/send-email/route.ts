import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Send email notification
    await sendEmail(body);

    // 2. Save lead to DB via dashboard API (same pattern as AddLead in dashboard)
    const leadsApiUrl = process.env.LEADS_API_URL;
    if (leadsApiUrl) {
      const payload = {
        lead_source: "Website (UCPC)",
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

      const leadsRes = await fetch(`${leadsApiUrl}/api/leads/manual`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!leadsRes.ok) {
        // Log the error but don't fail — email already sent successfully
        console.error(
          "Leads API error:",
          leadsRes.status,
          await leadsRes.text(),
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 },
    );
  }
}
