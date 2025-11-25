import { defineConfig } from '@rsbuild/core';

// ESM 格式构建配置
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
      js: '[name].esm.js',
    },
    distPath: {
      root: 'dist',
      js: '.',
    },
  },
  tools: {
    rspack: {
      output: {
        module: true,
        library: {
          type: 'module',
        },
      },
      experiments: {
        outputModule: true,
      },
    },
  },
});
