/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            main: 'Unbounded, sans-serif',
        },
        colors: {
            white: '#FFFFFF',
            green: '#3E9F96',
            dark: { DEFAULT: '#282828', border: '#383838' },
            gray: { DEFAULT: '#D9D9D9', text: '#828282' },
        },
        screens: {
            xxs: '425px',
            xs: '576px',
            sm: '768px',
            md: '960px',
            lg: '1200px',
            xl: '1400px',
            '2xl': '1680px',
            '3xl': '1920px',
        },
        plugins: [],
        extend: {
            borderRadius: {
                lg: '50px',
            },
            transitionDuration: {
                std: '300ms',
            },
            backgroundImage: {
                'main-tint-gradient':
                    'radial-gradient(73.17% 73.17% at 50% 26.83%, rgba(30, 30, 30, 0.00) 0%, #1E1E1E 100%)',
                'car-gradient':
                    'linear-gradient(180deg, #282828 0%, rgba(0, 0, 0, 0.00) 100%)',
            },
            lineHeight: {
                1.1: 1.1,
            },
        },
    },
};
