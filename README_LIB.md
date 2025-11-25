# 📦 使用 Rsbuild 构建 npm 库项目

这是一个使用 **Rsbuild** 构建的完整 npm 库示例项目，展示了如何创建一个可以发布到 npm 的 JavaScript/TypeScript 库。

## ✨ 特性

- 🚀 使用 Rsbuild 进行快速构建
- 📦 支持多种模块格式（ESM、CommonJS、UMD）
- 💪 完整的 TypeScript 支持和类型声明
- 🔧 自动化构建流程
- ✅ 包含测试示例
- 📝 详细的文档和发布指南

## 📁 项目结构

```
rsbuild-demo/
├── src/
│   └── lib/
│       └── index.ts          # 库的主要代码
├── dist/                      # 构建产物（发布到 npm）
│   ├── index.esm.js          # ESM 格式
│   ├── index.cjs.js          # CommonJS 格式
│   ├── index.umd.js          # UMD 格式
│   ├── index.d.ts            # TypeScript 类型声明
│   └── *.map                 # Source Maps
├── rsbuild.esm.config.ts     # ESM 构建配置
├── rsbuild.cjs.config.ts     # CJS 构建配置
├── rsbuild.umd.config.ts     # UMD 构建配置
├── package.json              # 包配置
├── tsconfig.json             # TypeScript 配置
├── test.mjs                  # 测试文件
├── .npmignore                # npm 发布忽略文件
├── LIB_README.md             # 库的使用文档
├── BUILD_GUIDE.md            # 构建说明
└── PUBLISH_GUIDE.md          # 发布指南
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建库

```bash
# 构建所有格式
pnpm run build

# 单独构建某个格式
pnpm run build:esm   # ESM 格式
pnpm run build:cjs   # CommonJS 格式
pnpm run build:umd   # UMD 格式
pnpm run build:types # TypeScript 类型声明
```

### 测试库

```bash
pnpm test
```

## 📦 构建产物

运行 `pnpm run build` 会在 `dist/` 目录生成：

- **index.esm.js** - ESM 模块格式（现代 JavaScript）
- **index.cjs.js** - CommonJS 格式（Node.js）
- **index.umd.js** - UMD 格式（浏览器）
- **index.d.ts** - TypeScript 类型声明文件
- **\*.map** - Source Map 文件（便于调试）

## 🛠️ 核心配置

### package.json 关键字段

```json
{
  "main": "./dist/index.cjs.js",      // CommonJS 入口
  "module": "./dist/index.esm.js",    // ESM 入口
  "types": "./dist/index.d.ts",       // TypeScript 类型
  "exports": {                         // 现代包导出配置
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"]                    // 只发布 dist 目录
}
```

### Rsbuild 配置要点

每个格式都有独立的配置文件：

**ESM (rsbuild.esm.config.ts)**
```typescript
tools: {
  rspack: {
    output: {
      module: true,
      library: { type: 'module' }
    },
    experiments: { outputModule: true }
  }
}
```

**CommonJS (rsbuild.cjs.config.ts)**
```typescript
tools: {
  rspack: {
    output: {
      library: { type: 'commonjs2' }
    }
  }
}
```

**UMD (rsbuild.umd.config.ts)**
```typescript
tools: {
  rspack: {
    output: {
      library: {
        name: 'MyMathUtils',  // 全局变量名
        type: 'umd'
      }
    }
  }
}
```

## 📖 使用示例

### ESM (推荐)

```javascript
import { add, formatCurrency } from '@yourusername/math-utils';

console.log(add(10, 20));              // 30
console.log(formatCurrency(99.99));    // ¥99.99
```

### CommonJS

```javascript
const { add, formatCurrency } = require('@yourusername/math-utils');

console.log(add(10, 20));              // 30
```

### UMD (浏览器)

```html
<script src="node_modules/@yourusername/math-utils/dist/index.umd.js"></script>
<script>
  console.log(MyMathUtils.add(10, 20)); // 30
</script>
```

## 📝 发布到 npm

### 准备发布

1. 修改 `package.json` 中的包名和信息
2. 运行 `pnpm run build` 构建
3. 运行 `pnpm test` 测试
4. 检查 `dist/` 目录内容

### 发布命令

```bash
# 登录 npm
npm login

# 发布包（首次发布 scoped package）
npm publish --access public

# 后续发布
npm publish
```

### 版本管理

```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 小版本 (1.0.0 -> 1.1.0)
npm version minor

# 大版本 (1.0.0 -> 2.0.0)
npm version major

# 发布新版本
npm publish
```

## 📚 相关文档

- **LIB_README.md** - 库的使用文档（发布后的 README）
- **BUILD_GUIDE.md** - 详细的构建说明
- **PUBLISH_GUIDE.md** - 完整的发布指南和清单

## 🔧 开发工作流

1. **修改代码** - 编辑 `src/lib/index.ts`
2. **构建** - 运行 `pnpm run build`
3. **测试** - 运行 `pnpm test` 或 `node test.mjs`
4. **发布** - 按照 PUBLISH_GUIDE.md 的步骤操作

## ⚠️ 注意事项

1. **包名唯一性** - npm 包名必须唯一，建议使用 scoped package（@username/package-name）
2. **版本管理** - 遵循[语义化版本](https://semver.org/lang/zh-CN/)规范
3. **不要发布源码** - `.npmignore` 已配置只发布 `dist/` 目录
4. **测试后发布** - `prepublishOnly` 钩子会在发布前自动运行构建
5. **类型声明** - TypeScript 用户会自动获得类型提示

## 🎯 最佳实践

- ✅ 始终在 `dist/` 目录包含所有必要的输出格式
- ✅ 提供完整的 TypeScript 类型声明
- ✅ 编写清晰的 API 文档和示例
- ✅ 使用语义化版本管理
- ✅ 在本地充分测试后再发布
- ✅ 保持依赖项最小化（当前无生产依赖）

## 🔗 资源链接

- [Rsbuild 官方文档](https://rsbuild.dev/)
- [npm 发布指南](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [语义化版本](https://semver.org/lang/zh-CN/)
- [package.json 字段说明](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

## 📄 许可证

MIT

---

**提示**: 这是一个模板项目，你可以：
- 修改 `src/lib/index.ts` 添加你自己的功能
- 更新 `package.json` 中的包名和信息
- 根据需要调整构建配置
- 添加更多的测试用例
