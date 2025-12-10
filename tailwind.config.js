/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0E14', // Deep dark background from reference
                primary: {
                    DEFAULT: '#3B82F6', // Blue accent
                    hover: '#2563EB',
                    foreground: '#FFFFFF'
                },
                card: {
                    DEFAULT: '#151921', // Darker card background
                    border: '#1F2937'
                },
                muted: {
                    DEFAULT: '#6B7280',
                    foreground: '#9CA3AF'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Or 'Outfit' if preferred
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
