/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        rosa: '#e1359d',
        violeta: '#5e17ea',
        lila: '#ae5bf6',
        verde: '#b7f200',
        bgBlanco: '#ededed',
        bgVioleta: '#1e173f'
      },
    },
    plugins: [],
  }
}