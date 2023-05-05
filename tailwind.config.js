module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
    theme: {
        screens: {
            sm: '860px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'white': '#ffffff',
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827'
            },
            'gray-light': '#d3dce6',
            'basic-red': 'rgba(164, 19, 60, 1)'
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            rubick: ['Rubick'],
            satoshi: ['Satoshi']
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                '3xl': '0 30px 60px -35px rgba(0, 0, 0, 0.3)'
            }
        }
    },
    plugins: [
        require('preline/plugin'),
    ],
}