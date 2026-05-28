import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload;
    const name = data.name?.trim();
    const email = data.email?.trim();
    const service = data.service?.trim();
    const subject = data.subject?.trim();
    const message = data.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.MAIL_FROM || user;
    const to = process.env.CONTACT_TO || "hello@quantixnode.com";

    if (!host || !user || !pass || !from) {
      return NextResponse.json(
        { error: "Email transport is not configured on server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.verify();

    const finalSubject = subject || `New Inquiry: ${service || "General"}`;
    const textBody = [
      `Full Name: ${name}`,
      `Email Address: ${email}`,
      `Service Needed: ${service || "Not specified"}`,
      "",
      "Project Brief / Message:",
      message,
    ].join("\n");

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email Address:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service Needed:</strong> ${escapeHtml(service || "Not specified")}</p>
        <p><strong>Project Brief / Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:8px">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: finalSubject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to send email.";
    const code =
      typeof error === "object" && error && "code" in error
        ? String((error as { code?: string }).code)
        : undefined;

    console.error("Contact API email send failed:", {
      message,
      code,
    });

    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        { error: `Failed to send email. ${code ? `[${code}] ` : ""}${message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
