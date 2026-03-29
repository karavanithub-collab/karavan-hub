import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, interest, message } = await req.json();

  if (!firstName || !email || !interest) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Karavan Hub Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New inquiry: ${interest} — ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br>') : '(none provided)'}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
