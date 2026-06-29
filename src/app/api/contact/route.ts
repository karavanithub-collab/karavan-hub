import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const INTEREST_LABELS: Record<string, string> = {
  'custom-software': 'Custom Software Development',
  'web-design': 'Web Design & Development',
  'data-analytics': 'Data Analytics & Business Intelligence',
  'ai-automation': 'AI Integration & Automation',
  'digital-transformation': 'Digital Transformation Strategy',
  'workflow-optimization': 'Workflow Optimization',
  'other': 'Other / Not Sure Yet',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, interest, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !interest) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const interestLabel = INTEREST_LABELS[interest] ?? interest;
    const from = process.env.RESEND_FROM ?? 'Karavan Hub <noreply@karavanhub.com>';
    const ownerEmail = process.env.CONTACT_EMAIL ?? 'karavan.it.hub@gmail.com';

    // Notification to owner — reply-to goes directly to the lead
    await resend.emails.send({
      from,
      to: ownerEmail,
      replyTo: email,
      subject: `New enquiry — ${firstName} ${lastName} (${interestLabel})`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#0f172a;">
          <div style="background:linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb);padding:28px 32px;border-radius:12px 12px 0 0;">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">New Contact Form Submission</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.65);">karavanhub.com/contact</p>
          </div>
          <div style="background:#f8fafc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;width:130px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;font-weight:600;font-size:14px;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
                <td style="padding:10px 0;font-size:14px;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
              </tr>
              <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Interest</td>
                <td style="padding:10px 0;font-size:14px;">${interestLabel}</td>
              </tr>
              <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
                <td style="padding:10px 0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message?.trim() || '<span style="color:#94a3b8;font-style:italic;">No message provided</span>'}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:14px 16px;background:#eff6ff;border-radius:8px;font-size:13px;color:#1d4ed8;">
              Hit <strong>Reply</strong> to respond directly to ${firstName}.
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the lead
    await resend.emails.send({
      from,
      to: email,
      subject: `Got it, ${firstName} — we'll be in touch`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#0f172a;">
          <div style="background:linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb);padding:28px 32px;border-radius:12px 12px 0 0;">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">We received your message.</h1>
          </div>
          <div style="background:#f8fafc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#334155;">Hi ${firstName},</p>
            <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#334155;">
              Thanks for reaching out about <strong>${interestLabel}</strong>.
              A real person from the Karavan IT HUB team will get back to you within 24 hours.
            </p>
            <p style="margin:0 0 32px;font-size:14px;line-height:1.7;color:#334155;">
              No automated sales sequences. No follow-up spam. Just a straightforward reply.
            </p>
            <div style="border-top:1px solid #e2e8f0;padding-top:20px;font-size:12px;color:#94a3b8;">
              Karavan IT HUB &middot; Niagara, Ontario &middot;
              <a href="https://www.karavanhub.com" style="color:#2563eb;text-decoration:none;">karavanhub.com</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
