import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name: string;
  phone: string;
  email?: string;
  organization?: string;
  type?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const row = (label: string, value?: string) =>
      value
        ? `<tr><td style="padding:8px;font-weight:bold;">${label}:</td><td style="padding:8px;">${value}</td></tr>`
        : "";

    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color:#2563eb;">פנייה חדשה מאתר סדנאות קומיקס, איור ואנימציה</h2>
        <table style="width:100%; border-collapse:collapse;">
          ${row("שם", body.name)}
          <tr><td style="padding:8px;font-weight:bold;">טלפון:</td><td style="padding:8px;"><a href="tel:${body.phone}">${body.phone}</a></td></tr>
          ${body.email ? `<tr><td style="padding:8px;font-weight:bold;">אימייל:</td><td style="padding:8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>` : ""}
          ${row("ארגון / מוסד", body.organization)}
          ${row("סוג סדנה", body.type)}
          ${row("פרטים", body.message)}
        </table>
      </div>
    `;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from:
          process.env.RESEND_FROM ??
          "סדנאות יצירה <creative@eladjak.com>",
        to: process.env.CONTACT_EMAIL ?? "eladjak@gmail.com",
        subject: `פנייה חדשה מ${body.name} — סדנאות קומיקס/איור/אנימציה`,
        html: emailHtml,
        replyTo: body.email || undefined,
      });
    } else {
      console.log("Contact form submission (no RESEND_API_KEY):", body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
