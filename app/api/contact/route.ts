import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!subject || !message) {
    return NextResponse.json({ error: "Subject and message are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "jonandrewezell@gmail.com",
    replyTo: email || undefined,
    subject: subject,
    text: `From: ${name || "Anonymous"}${email ? ` <${email}>` : ""}\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name || "Anonymous"}${email ? ` &lt;${email}&gt;` : ""}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
