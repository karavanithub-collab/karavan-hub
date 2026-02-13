import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          deeper: '#1E3A8A',
          light: '#EFF6FF',
        },
        accent: {
          cyan: '#22D3EE',
          purple: '#8B5CF6',
        },
        'text-dark': '#1A1A2E',
        'text-body': '#4A4A68',
        'text-muted': '#6B7280',
        'bg-light': '#F9FAFB',
        'border-light': '#E5E7EB',
        success: '#10B981',
        error: '#EF4444',
        // Deep ocean / cyberpunk colors
        ocean: {
          darkest: '#000022',
          dark: '#000035',
          mid: '#001242',
          purple: '#0a0028',
          'deep-purple': '#120040',
        },
        neon: {
          cyan: '#00d4ff',
          'bright-cyan': '#00ffff',
          'deep-cyan': '#00bfff',
          purple: '#bf00ff',
          violet: '#9d4edd',
          'deep-violet': '#7b2cbf',
          magenta: '#ff00ff',
        },
        // Blog colors
        blog: {
          bg: '#F5F5F0',
          accent: '#1A5A5A',
          code: '#1A1A1A',
        },
      },
      fontFamily: {
        headline: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        // Blog-specific fonts
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        geist: ['Geist', '-apple-system', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'DM Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(48px, 7vw, 80px)', { lineHeight: '1.05', letterSpacing: '-1.5px' }],
        'section': ['42px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'card': ['28px', { lineHeight: '1.3', letterSpacing: '-0.25px' }],
        'accordion': ['17px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      maxWidth: {
        container: '1240px',
      },
      spacing: {
        'section': '120px',
        'section-mobile': '70px',
      },
      borderRadius: {
        'card': '16px',
        'visual': '24px',
      },
      boxShadow: {
        'card': '0 12px 24px rgba(37, 99, 235, 0.12)',
        'card-hover': '0 12px 24px rgba(37, 99, 235, 0.12)',
        'btn': '0 4px 20px rgba(37, 99, 235, 0.3)',
        'btn-hover': '0 6px 24px rgba(37, 99, 235, 0.4)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'visual': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'cyan-glow': '0 0 50px rgba(0, 212, 255, 0.2), 0 0 100px rgba(157, 78, 221, 0.15), inset 0 0 80px rgba(0, 0, 0, 0.4)',
        'nav-cta': '0 4px 20px rgba(34, 211, 238, 0.3)',
        'nav-cta-hover': '0 6px 24px rgba(34, 211, 238, 0.4)',
      },
      keyframes: {
        ambientPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.03)' },
        },
        cyberpunkPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.9', transform: 'translate(-50%, -50%) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ambient-pulse': 'ambientPulse 8s ease-in-out infinite',
        'cyberpunk-pulse': 'cyberpunkPulse 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
