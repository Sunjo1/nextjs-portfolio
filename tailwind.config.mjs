// tailwind.config.mjs
import { join } from 'path';
import { fileURLToPath } from 'url';



/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'app/**/*.{js,ts,jsx,tsx}'),
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme: "#11001F",
                //  lightTheme: "#f8f0ff",
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                ovo: ['Ovo', 'serif'],
            },

        },
    },
    plugins: [],
};

export default config;
