import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Only try to import componentTagger if it's available
let componentTagger
try {
  componentTagger = require("lovable-tagger").componentTagger
} catch (e) {
  // Ignore error if package is not found
  componentTagger = null
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only add componentTagger if it exists and we're in development mode
    mode === 'development' && componentTagger && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))