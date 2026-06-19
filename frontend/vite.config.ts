import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteHealthPlugin } from './plugins/health-check/vite-health-plugin'

export default defineConfig(async ({ command }) => {
  const isDev = command === 'serve'

  const plugins: any[] = [
    react(),
    viteHealthPlugin(),
  ]

  if (isDev) {
    try {
      const mod = await import('@emergentbase/visual-edits/vite')
      const visualEditsPlugin = mod.visualEdits?.() ?? mod.default?.()
      if (visualEditsPlugin) plugins.push(visualEditsPlugin)
    } catch {
      console.warn('[visual-edits] @emergentbase/visual-edits/vite not available — visual editing disabled.')
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
  }
})
