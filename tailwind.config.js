/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana'],
        bodoni: ['Bodoni Moda'],
        poppins: ['Poppins']
    },
    colors: {
      primary: '#FFFAEE',
      secondary: '#AC3D61',
      third: '#1B7376',
    }

  },
  plugins: [],
}
}