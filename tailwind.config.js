/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
        colors:{
        bgPrimary: 'var(--mainBackground)',
        bgSecondary: 'var(--bannerPrimaryBackground)',
        bgTertiary: 'var(--bannerSecondaryBackground)',
        btnPrimary:'var(--btnPrimaryBackground)',
        btnSecondary: 'var(--btnSecondaryBackground)',
        textPrimary: 'var(--headerPrimaryColor)',
        textSecondary: 'var(--headerSecondaryColor)',
        textTertiary: 'var(--headertheirdColor)',
        cardPrimary: 'var(--cardPrimaryColor)',
        cardSecondary: 'var(--cardSecondaryColor)',
        cardTiertiary: 'var(--cardTheirdColor)',
        footerPrimary: 'var(--footerPrimaryBackground)',
        },
        spacing:{
            xs:'4px',
            m:'8px',
        },
        fontFamily:{
            helvetica: ['helvetica Neue LT Std', 'sans-serif'],
            ppNeueMontreal:['PP Neue Montreal', 'sans-serif'],
            manrope:['Manrope', 'sans-serif'],
        },
    },
  },
  plugins: [],
}