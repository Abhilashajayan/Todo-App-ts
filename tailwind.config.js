// tailwind.config.js
export default {
  content: ['./public/**/*.html', './src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        'navy-blue': '#001F3F',      // Customize hex code as needed
        'electric-blue': '#3498db',  // Customize hex code as needed
      },
    },
  },
  variants: {},
  plugins: [],
}
