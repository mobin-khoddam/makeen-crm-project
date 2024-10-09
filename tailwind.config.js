/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#001EBC",
        "primary-gray": "#F4F4F6"
      }
    },
  },
  plugins: [],
}