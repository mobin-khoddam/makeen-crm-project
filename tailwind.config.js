import daisyui from "daisyui";
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#001EBC",
                "primary-red": "#DC0000",
                "primary-gray": "#F4F4F6",
                "primary-gray-100": "#A3A3A3",
                "gray-table": "#F9FAFB",
            },
        },
    },
    plugins: [daisyui, tailwindScrollbar],
};
