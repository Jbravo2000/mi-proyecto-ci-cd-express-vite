import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/mi-proyecto-ci-cd-express-vite/",
  plugins: [react()],
})
