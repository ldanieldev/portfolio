/** @type {import('tailwindcss').Config} */
defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '480px',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        cookie: ['var(--font-cookie)'],
        sans: ['var(--font-poppins)', defaultTheme.fontFamily.sans],
      },
      animation: {
        'card-bounce': 'bounce 1.75s infinite',
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#93c5fd',

          secondary: '#3b82f6',

          accent: '#1f2937',

          neutral: '#e5e7eb',

          'base-100': '#f3f4f6',

          info: '#e0f2fe',

          success: '#d1fae5',

          warning: '#fef08a',

          error: '#fda4af',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
