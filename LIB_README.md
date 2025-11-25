# Math Utils 库

一个使用 Rsbuild 构建的简单数学工具库，支持 ESM、CommonJS 和 UMD 格式。

## 功能特性

- ✅ 基础数学运算（加减乘除）
- ✅ 数组求和与平均值
- ✅ 货币格式化
- ✅ 完整的 TypeScript 类型支持
- ✅ 支持多种模块格式（ESM/CJS/UMD）
- ✅ 使用 Rsbuild 构建，性能优秀

## 安装

```bash
npm install @yourusername/math-utils
# 或
pnpm add @yourusername/math-utils
# 或
yarn add @yourusername/math-utils
```

## 使用方法

### ESM

```javascript
import { add, subtract, multiply, divide, formatCurrency, sum, average } from '@yourusername/math-utils';

console.log(add(2, 3)); // 5
console.log(formatCurrency(99.99)); // ¥99.99
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(average([1, 2, 3, 4, 5])); // 3
```

### CommonJS

```javascript
const { add, subtract, formatCurrency } = require('@yourusername/math-utils');

console.log(add(10, 20)); // 30
console.log(formatCurrency(199.99, '$')); // $199.99
```

### UMD（浏览器）

```html
<script src="node_modules/@yourusername/math-utils/dist/index.umd.js"></script>
<script>
  console.log(MyMathUtils.add(5, 10)); // 15
  console.log(MyMathUtils.formatCurrency(299.99)); // ¥299.99
</script>
```

## API 文档

### add(a, b)
两数相加
- `a: number` - 第一个数字
- `b: number` - 第二个数字
- 返回: `number` - 两数之和

### subtract(a, b)
两数相减
- `a: number` - 被减数
- `b: number` - 减数
- 返回: `number` - 两数之差

### multiply(a, b)
两数相乘
- `a: number` - 第一个因数
- `b: number` - 第二个因数
- 返回: `number` - 两数之积

### divide(a, b)
两数相除
- `a: number` - 被除数
- `b: number` - 除数（不能为0）
- 返回: `number` - 两数之商
- 抛出: 当除数为0时抛出错误

### formatCurrency(value, currency?)
格式化数字为货币格式
- `value: number` - 要格式化的数字
- `currency: string` - 货币符号（默认: '¥'）
- 返回: `string` - 格式化后的字符串

### sum(numbers)
数组求和
- `numbers: number[]` - 数字数组
- 返回: `number` - 数组所有元素的和

### average(numbers)
数组求平均值
- `numbers: number[]` - 数字数组
- 返回: `number` - 数组的平均值

## 本地开发

```bash
# 安装依赖
pnpm install

# 构建库
pnpm run build

# 代码格式化
pnpm run format

# 代码检查
pnpm run lint
```

## 构建产物

运行 `pnpm run build` 后，会在 `dist` 目录生成以下文件：

```
dist/
├── index.esm.js       # ESM 格式
├── index.esm.js.map   # ESM Source Map
├── index.cjs.js       # CommonJS 格式
├── index.cjs.js.map   # CJS Source Map
├── index.umd.js       # UMD 格式
├── index.umd.js.map   # UMD Source Map
└── index.d.ts         # TypeScript 类型声明
```

## 发布到 npm

1. 修改 `package.json` 中的包名和作者信息
2. 登录 npm：`npm login`
3. 发布：`npm publish --access public`

注意：首次发布带作用域的包（如 `@yourusername/xxx`）需要加 `--access public` 参数。

## License

MIT
