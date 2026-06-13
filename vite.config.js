import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// System Reset Configuration
export default defineConfig({
  plugins: [react()],
  base: './', // Using relative paths forces the browser to find files wherever they are
})
