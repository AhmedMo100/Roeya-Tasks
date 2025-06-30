import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
})
