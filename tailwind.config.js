/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b", // Zinc 950 - Modern Dark
                foreground: "#f4f4f5", // Zinc 100
                primary: "#3b82f6",    // Blue 500
                secondary: "#8b5cf6",  // Violet 500
                accent: "#10b981",     // Emerald 500
                surface: "#18181b",    // Zinc 900
                "surface-hover": "#27272a", // Zinc 800
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-fira-code)', 'Courier New', 'monospace'],
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
