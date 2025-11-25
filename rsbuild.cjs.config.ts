import { defineConfig } from '@rsbuild/core';

// CommonJS 格式构建配置
export default defineConfig({
  source: {
    entry: {
      index: './src/lib/index.ts',
    },
  },
  output: {
    target: 'node',
    minify: true,
    cleanDistPath: false,
    sourceMap: {
      js: 'source-map',
    },
    filename: {
      js: '[name].cjs.js',
    },
    distPath: {
      root: 'dist',
    },
  },
  tools: {
    rspack: {
      output: {
        library: {
          type: 'commonjs2',
        },
      },
    },
  },
});
