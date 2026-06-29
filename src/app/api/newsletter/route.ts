import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const from = process.env.RESEND_FROM ?? 'Karavan Hub <noreply@karavanhub.com>';
    const ownerEmail = process.env.CONTACT_EMAIL ?? 'karavan.it.hub@gmail.com';
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Add to Resend Audience if configured (create one at resend.com/audiences)
    if (audienceId) {
      await resend.contacts.create({ email, audienceId, unsubscribed: false });
    }

    // Notify owner
    await resend.emails.send({
      from,
      to: ownerEmail,
      subject: `New newsletter signup — ${email}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:500px;margin:0 auto;padding:24px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;color:#0f172a;">
          <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;">New Newsletter Signup</h2>
          <p style="margin:0;font-size:14px;"><strong>${email}</strong> subscribed via karavanhub.com.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[newsletter] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
