import { defineConfig } from '@rsbuild/core';

// Docs: https://rsbuild.rs/config/
// 配置用于构建 npm 库
export default defineConfig({
  source: {
    entry: {
      index: './src/lib/index.ts',
    },
  },
  output: {
    target: 'web',
    minify: true,
    cleanDistPath: true,
    sourceMap: {
      js: 'source-map',
    },
    filename: {
      js: '[name].js',
    },
    distPath: {
      root: 'dist',
    },
  },
});
