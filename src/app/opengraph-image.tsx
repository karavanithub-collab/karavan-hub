import { ImageResponse } from 'next/og'

// One social preview image for the whole site, generated at build time.
// Replaces the twelve og:image / twitter:image files that never existed (task w08).
// Next.js serves it at /opengraph-image and adds the meta tags on every page.

export const alt = 'Karavan IT Hub: websites, automation and software for small businesses in Niagara, Ontario'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0B1220 0%, #10213A 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>Karavan IT Hub</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            We build the technology. You get your time back.
          </div>
          <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.78)', lineHeight: 1.3, maxWidth: 980 }}>
            Websites, automation and custom software for small businesses.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: 'rgba(255,255,255,0.7)' }}>
          <div>Pelham, Ontario · Niagara Region</div>
          <div>karavanhub.com</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
