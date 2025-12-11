import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 从环境变量获取仓库名，用于 GitHub Pages 部署
// 你需要把 'ci-cd-demo' 改成你的实际仓库名
const base = process.env.GITHUB_ACTIONS ? '/test/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    proxy: { '/api': 'http://localhost:3000' }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
})

