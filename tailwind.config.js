/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-light': '#F7F8FC',
                'secondary-light': '#FFFFFF',
                'ternary-light': '#f6f7f8',

                'primary-dark': '#0D2438',
                'secondary-dark': '#102D44',
                'ternary-dark': '#1E3851',
            },
            fontFamily: {
                'general': ['GeneralSans-Variable', 'sans-serif'],
            },
        },
    },
    plugins: [],
}