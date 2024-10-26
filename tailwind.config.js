/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

const sansFonts = [
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  '"Lucida Grande"',
  'sans-serif',
]
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: sansFonts,
        rounded: ['"Rubik"', ...sansFonts],
      },
      fontSize: {
        h1: '3.063rem', // 49px
        h2: '2.563rem', // 41px
        h3: '2.125rem', // 34px
        h4: '1.75rem', // 28px
        h5: '1.438rem', // 23px
        h6: '1.188rem', // 19px
        base: '1rem', // 16px
        small: '0.875rem', // 14px
        tiny: '0.688rem', // 11px
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        tormenta: {
          50: '#414757',
          100: '#C4C6C9',
          200: '#8C8F96',
          300: '#535762',
          400: '#1A1F2E',
        },
        niebla: {
          100: '#CCCECF',
          200: '#999C9F',
          300: '#676B70',
          400: '#343A40',
        },
        oceano: {
          100: '#BFD7F2',
          200: '#7FAEE5',
          300: '#4086D9',
          400: '#0076FF',
        },
        sol: {
          100: '#FAF9CC',
          200: '#F6F399',
          300: '#F2ED67',
          400: '#EDE734',
        },
        peach: {
          100: '#FDF9F5',
          200: '#FAF4EA',
          300: '#F8EFE0',
          400: '#F6E9D6',
        },
        ceniza: {
          50: '#F5F5F5',
          100: '#FAFBFB',
          200: '#F5F7F8',
          300: '#F1F3F5',
          400: '#ECEFF1',
        },
        nieve: {
          100: '#F7FAFF',
          200: '#EFF4FF',
          300: '#E8EFFF',
          400: '#E0EAFF',
        },
        cielo: {
          100: '#F9FAFF',
          200: '#F3F6FF',
          300: '#EEF2FF',
          400: '#E8EDFF',
        },
        success: {
          100: '#C9E0D6',
          200: '#94C1AC',
          300: '#5FA383',
          400: '#29845A',
        },
        info: {
          100: '#DCE8FF',
          200: '#BAD1FF',
          300: '#98BAFF',
          400: '#75A3FF',
        },
        danger: {
          100: '#FFD8D8',
          200: '#FFB2B2',
          300: '#FF8C8C',
          400: '#FF6565',
        },
        warning: {
          100: '#FDEBCE',
          200: '#FAD89D',
          300: '#F8C56D',
          400: '#F6B13C',
        },
        torre: {
          100: '#ECECEC',
        },
        contorno: {
          100: '#EBF0F4',
          200: '#DBE2EA',
          300: '#C4CFDD',
          400: '#A7B5CB',
        },
        heather: {
          100: '#B6BFCB',
          200: '#DCE3E6',
          300: '#CAC8D9',
        },
      },
      spacing: {
        1: '0.125rem', // 2px
        2: '0.25rem', // 4px
        3: '0.5rem', // 8px
        4: '0.75rem', // 12px
        5: '1rem', // 16px
        6: '1.25rem', // 20px
        7: '1.5rem', // 24px
        8: '2rem', // 32px
        9: '2.5rem', // 40px
        10: '3rem', // 48px
        11: '4rem', // 64px
        12: '5rem', // 80px
        13: '6rem', // 96px
        14: '10rem', // 160px
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.container-max': {
          'padding-left': theme('spacing.9'),
          'padding-right': theme('spacing.9'),
        },
      })
    }),
  ],
}
