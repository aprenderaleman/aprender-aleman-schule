// Email abstraction. Two implementations:
//   1. Resend (preferred) — set RESEND_API_KEY env
//   2. Console fallback — logs to stdout, used in dev or when Resend missing
//
// All callers use the same `sendEmail({to, subject, html, text})` interface.

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.EMAIL_FROM || 'Schule <noreply@aprender-aleman.de>'
const REPLY_TO   = process.env.EMAIL_REPLY_TO || 'info@aprender-aleman.de'

let resendClient = null
async function getResend() {
  if (!RESEND_API_KEY) return null
  if (!resendClient) {
    const { Resend } = await import('resend')
    resendClient = new Resend(RESEND_API_KEY)
  }
  return resendClient
}

/**
 * Send an email. Falls back to logging if RESEND_API_KEY is not configured.
 *
 *   await sendEmail({
 *     to: 'foo@bar.com',
 *     subject: 'Tu link de acceso',
 *     html: '<p>Click <a href="…">here</a></p>',
 *     text: 'Click here: …',
 *   })
 *
 * Returns { ok: true, id?: string } on success.
 * Throws on hard failure (bad config, 4xx from provider).
 */
async function sendEmail({ to, subject, html, text, from = FROM_EMAIL, replyTo = REPLY_TO }) {
  if (!to || !subject || !(html || text)) {
    throw new Error('sendEmail: missing to/subject/html|text')
  }

  const resend = await getResend()
  if (!resend) {
    // Dev / no-config fallback: log to stdout so the dev can copy-paste the link
    console.warn('[email] Resend not configured — logging to stdout:')
    console.warn('  To:      ', to)
    console.warn('  Subject: ', subject)
    console.warn('  Body:    ', text || stripHtml(html).slice(0, 500))
    return { ok: true, id: 'console-' + Date.now() }
  }

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      html,
      text: text || stripHtml(html),
    })
    if (result.error) {
      throw new Error(`Resend error: ${result.error.message || JSON.stringify(result.error)}`)
    }
    return { ok: true, id: result.data?.id }
  } catch (err) {
    console.error('[email] sendEmail failed:', err.message)
    throw err
  }
}

function stripHtml(s) {
  return String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * Magic link email — branded, both languages (es/de) based on user preference.
 */
function magicLinkTemplate({ url, lang = 'es', expiresInMin = 15 }) {
  const t = lang === 'de' ? translations.de : translations.es
  const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, system-ui, 'Segoe UI', sans-serif; background:#F8F9FB; margin:0; padding:32px 16px;">
  <table role="presentation" align="center" style="max-width:520px; width:100%; background:#FFFFFF; border-radius:14px; padding:32px; box-shadow:0 4px 12px rgba(15,40,71,0.08)">
    <tr><td style="text-align:center; padding-bottom:24px">
      <h1 style="margin:0; color:#0F2847; font-size:28px; letter-spacing:-0.02em">Schule</h1>
    </td></tr>
    <tr><td style="color:#1A1D29; line-height:1.55; font-size:15px">
      <p>${t.intro}</p>
      <p style="text-align:center; margin:32px 0">
        <a href="${url}" style="display:inline-block; background:#F4A261; color:#1A1D29; padding:14px 28px; border-radius:12px; text-decoration:none; font-weight:bold; font-size:15px">
          ${t.cta}
        </a>
      </p>
      <p style="color:#64748B; font-size:13px">${t.expiresIn.replace('{min}', expiresInMin)}</p>
      <p style="color:#64748B; font-size:13px">${t.fallbackUrlLabel}</p>
      <p style="word-break:break-all; color:#0F2847; font-size:12px">${url}</p>
      <hr style="border:none; border-top:1px solid #E2E8F0; margin:24px 0">
      <p style="color:#64748B; font-size:12px">${t.notRequested}</p>
    </td></tr>
  </table>
</body></html>`.trim()

  const text = `${t.intro}\n\n${url}\n\n${t.expiresIn.replace('{min}', expiresInMin)}\n\n${t.notRequested}`
  return { html, text, subject: t.subject }
}

const translations = {
  es: {
    subject: 'Tu enlace de acceso a Schule',
    intro: 'Hola, hacé clic en el botón para iniciar sesión en Schule. No hace falta contraseña.',
    cta: 'Iniciar sesión',
    expiresIn: 'Este enlace expira en {min} minutos y solo puede usarse una vez.',
    fallbackUrlLabel: 'Si el botón no funciona, copiá esta URL en tu navegador:',
    notRequested: 'Si no solicitaste este enlace, podés ignorar este email.',
  },
  de: {
    subject: 'Dein Anmeldelink für Schule',
    intro: 'Hallo, klicke auf den Button, um dich bei Schule anzumelden. Kein Passwort nötig.',
    cta: 'Anmelden',
    expiresIn: 'Der Link ist {min} Minuten gültig und kann nur einmal verwendet werden.',
    fallbackUrlLabel: 'Falls der Button nicht funktioniert, kopiere diese URL in deinen Browser:',
    notRequested: 'Wenn du diesen Link nicht angefordert hast, kannst du diese E-Mail ignorieren.',
  },
}

export { sendEmail, magicLinkTemplate }
