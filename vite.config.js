import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sahil-cloud-engineer/',
  build: {
    outDir: '.', // Forces Vite to build files right into the main directory
  }
})
