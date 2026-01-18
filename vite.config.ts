import { defineConfig } from 'vite'
import { resolve } from 'path'



export default defineConfig({
  // 基础路径，使用相对路径
  base: './',
  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
    host: true,
    watch: {
      // 明确追踪 src 目录下的所有文件变化
      ignored: ['!**/src/**'],
      // 使用轮询模式（在某些系统上更可靠）
      usePolling: false,
    },
    hmr: {
      // 启用热模块替换
      overlay: true,
    },
  },
  // 优化依赖预构建（开发模式下）
  optimizeDeps: {
    // 不预构建 src 下的文件，让它们实时编译
    exclude: ['src/**'],
  },
  // 构建配置
  build: {
    outDir: 'dist',
    emptyOutDir: false, // 只在第一次构建时清空
    cssCodeSplit: false, // 不拆分 CSS，内联到 JS 中
    minify: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // 确保正确解析 src 目录下的模块
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    // CSS 作为字符串导出
    modules: {
      generateScopedName: '[name]__[local]',
    },
  },
  esbuild: {
    target: 'es2022',
  },
})
