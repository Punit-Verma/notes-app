/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      'gridTemplateColumns': {
        'main': '20% 80%',
      },
      'colors': {
        'primary': '#121417',
        'secondary': '#1c1f24',
        'ternary': '#3c3e41'
      },
      fontFamily: {
        'primary': 'roboto'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
