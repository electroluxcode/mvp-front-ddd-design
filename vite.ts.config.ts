import { defineConfig } from 'vite'
import { resolve } from 'path'

// 专门用于 TypeScript 打包的配置
export default defineConfig({
  // 基础路径，使用相对路径
  base: './',
  // 构建配置
  build: {
    outDir: 'dist-ts',
    emptyOutDir: true,
    // 入口文件
    rollupOptions: {
      input: resolve(__dirname, 'src/main.ts'),
      // 使用 preserveModules 时必须设置 preserveEntrySignatures
      preserveEntrySignatures: 'strict',
      output: {
        // 保持目录结构
        preserveModules: true,
        preserveModulesRoot: 'src',
        // 输出格式为 ES 模块
        format: 'es',
        // 入口文件名
        entryFileNames: '[name].js',
      },
    },
    // 不压缩，保持代码可读性
    minify: false,
    // 生成 source map
    sourcemap: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    target: 'es2022',
  },
})
