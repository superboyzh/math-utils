# 构建说明

这个项目包含两部分：

## 1. 库模式（用于发布到 npm）

### 源代码位置
- `src/lib/index.ts` - 库的主入口文件

### 构建配置
- `rsbuild.esm.config.ts` - ESM 格式配置
- `rsbuild.cjs.config.ts` - CommonJS 格式配置
- `rsbuild.umd.config.ts` - UMD 格式配置

### 构建命令
```bash
# 构建所有格式
pnpm run build

# 单独构建某个格式
pnpm run build:esm
pnpm run build:cjs
pnpm run build:umd
pnpm run build:types
```

### 输出目录
所有构建产物都在 `dist/` 目录：
- `index.esm.js` - ESM 模块
- `index.cjs.js` - CommonJS 模块
- `index.umd.js` - UMD 模块
- `index.d.ts` - TypeScript 类型声明
- `*.map` - Source Map 文件

## 2. 应用模式（原有的 Vue 应用）

### 源代码位置
- `src/index.ts` - 应用入口
- `src/App.vue` - Vue 组件
- `src/app.ts` - 其他代码

### 构建配置
- `rsbuild.config.ts` - 应用构建配置

### 开发命令
```bash
# 启动开发服务器
pnpm run dev

# 预览生产构建
pnpm run preview
```

## 发布流程

1. **准备发布**
   - 修改 `package.json` 中的包名（`@yourusername/math-utils` 改为你的包名）
   - 更新版本号
   - 填写作者信息和仓库地址

2. **构建**
   ```bash
   pnpm run build
   ```

3. **测试**
   在本地项目中测试：
   ```bash
   npm link
   # 在其他项目中
   npm link @yourusername/math-utils
   ```

4. **发布**
   ```bash
   npm login
   npm publish --access public
   ```

## 注意事项

- `package.json` 的 `files` 字段指定了只发布 `dist` 目录
- `prepublishOnly` 脚本确保发布前自动构建
- 库的依赖应该放在 `peerDependencies` 或 `devDependencies` 中
- 目前 `dependencies` 为空，保持轻量级
