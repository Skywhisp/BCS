/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'hero': '1fr 1fr',
        'services': '1fr 1fr',
        'contacts': '1fr 1fr',
      },
      gridTemplateRows: {
        'hero': 'auto auto',
      },
      colors: {
        'custom-blue': '#20B2FF',
        'custom-black': '#1B1D1E',
        'custom-card-blue': '#0A1048',
      },
    },
  },
  plugins: [],
}
