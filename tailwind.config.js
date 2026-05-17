/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ── Brand Colors ────────────────────────────────────────
      // Full strings are used so Tailwind's content scanner detects them.
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          active: '#4338ca',
          light: '#e0e7ff',
          'light-hover': '#c7d2fe',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#10b981',
          hover: '#059669',
          light: '#d1fae5',
        },
        danger: {
          DEFAULT: '#ef4444',
          hover: '#dc2626',
          light: '#fee2e2',
        },
        warning: {
          DEFAULT: '#f59e0b',
          hover: '#d97706',
          light: '#fef3c7',
        },
        // Semantic surface tokens
        surface: '#ffffff',
        page: '#f0f2f5',
      },

      // ── Typography ───────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },

      // ── Border Radius ────────────────────────────────────────
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },

      // ── Shadows ──────────────────────────────────────────────
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        focus: '0 0 0 3px rgb(99 102 241 / 0.35)',
        'focus-danger': '0 0 0 3px rgb(239 68 68 / 0.35)',
        'focus-success': '0 0 0 3px rgb(16 185 129 / 0.35)',
      },

      // ── Layout ───────────────────────────────────────────────
      maxWidth: {
        content: '640px',
      },
    },
  },
  plugins: [],
};
