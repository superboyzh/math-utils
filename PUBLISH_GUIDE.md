# 发布前清单

在发布到 npm 之前，请确保完成以下步骤：

## 1. 更新包信息

在 `package.json` 中修改：

- [ ] `name`: 改为你的包名（如 `@yourusername/math-utils`）
- [ ] `version`: 设置版本号（遵循语义化版本）
- [ ] `description`: 更新描述
- [ ] `author`: 填写作者信息
- [ ] `repository`: 填写仓库地址
- [ ] `keywords`: 添加关键词，便于搜索
- [ ] `license`: 确认许可证（默认 MIT）

## 2. 测试构建

```bash
# 清理并重新构建
pnpm run build

# 运行测试
node test.mjs

# 检查构建产物
ls -lh dist/
```

## 3. 验证包内容

```bash
# 查看将要发布的文件
npm pack --dry-run

# 或者实际打包查看
npm pack
tar -tzf *.tgz
rm *.tgz
```

## 4. 本地测试（可选）

```bash
# 在项目中创建链接
npm link

# 在另一个项目中测试
cd /path/to/test-project
npm link @yourusername/math-utils

# 在测试项目中使用
import { add } from '@yourusername/math-utils';
console.log(add(1, 2));
```

## 5. 发布到 npm

```bash
# 登录 npm（首次需要）
npm login

# 发布包
npm publish --access public

# 如果是 scoped package (@username/package)，需要 --access public
# 如果不是 scoped package，可以直接 npm publish
```

## 6. 发布后验证

```bash
# 查看发布的包
npm view @yourusername/math-utils

# 在新项目中安装测试
npm install @yourusername/math-utils
```

## 7. 更新版本

后续更新时：

```bash
# 补丁版本（bug 修复）
npm version patch

# 小版本（新功能，向后兼容）
npm version minor

# 大版本（破坏性更改）
npm version major

# 发布新版本
npm publish
```

## 注意事项

- ✅ 确保 `dist/` 目录包含所有必要的文件
- ✅ 检查 `package.json` 的 `main`、`module`、`types` 字段正确
- ✅ 确保 `.npmignore` 文件正确配置，不发布源代码
- ✅ 包名在 npm 上必须是唯一的
- ✅ 首次发布 scoped package 需要 `--access public`
- ✅ 发布后无法删除，只能废弃（deprecate）

## 撤销发布

如果需要撤销已发布的版本（24小时内）：

```bash
npm unpublish @yourusername/math-utils@1.0.0
```

废弃某个版本（推荐）：

```bash
npm deprecate @yourusername/math-utils@1.0.0 "此版本已废弃，请使用最新版本"
```
