module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black
        secondary: "#A855F7", // purple-500
        accent: "#3B82F6", // blue-500
        background: "#1E1E1E", // gray-800
        surface: "#2A2A2A", // gray-700
        text: {
          primary: "#FFFFFF", // white
          secondary: "#E5E5E5", // gray-200
        },
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
        neon: {
          purple: "#A855F7", // purple-500
          blue: "#3B82F6", // blue-500
          green: "#10B981", // emerald-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'neon-success': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'breathing': 'breathing 2s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}