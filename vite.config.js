// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 여기를 정확히 확인합니다.
  base: '/Wedding/', // 리포지토리 이름 앞뒤에 슬래시(/)가 있어야 합니다.
})