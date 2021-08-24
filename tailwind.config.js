module.exports = {
    // mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                'wrapper': '1080px',
            },
            colors: {
                'back': '#E7F6FF',
                'btn': '#9DD458',
            }
        },
    },
    variants: {
        extend: {
            opacity: ['active'],
            backgroundColor: ['active'],
            translate: ['group-hover'],
            scale: ['group-hover'],
        },
    },
    plugins: [],
}
