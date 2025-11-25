import { defineConfig } from '@rsbuild/core';

// UMD 格式构建配置
export default defineConfig({
  source: {
    entry: {
      index: './src/lib/index.ts',
    },
  },
  output: {
    target: 'web',
    minify: true,
    cleanDistPath: false,
    sourceMap: {
      js: 'source-map',
    },
    filename: {
      js: '[name].umd.js',
    },
    distPath: {
      root: 'dist',
      js: '.',
    },
  },
  tools: {
    rspack: {
      output: {
        library: {
          name: 'MyMathUtils',
          type: 'umd',
        },
      },
    },
  },
});
