# @jokerxue/math-utils

[![npm version](https://img.shields.io/npm/v/@jokerxue/math-utils.svg)](https://www.npmjs.com/package/@jokerxue/math-utils)
[![license](https://img.shields.io/npm/l/@jokerxue/math-utils.svg)](https://github.com/superboyzh/math-utils/blob/main/LICENSE)

一个简单实用的数学工具库，使用 Rsbuild 构建，支持 TypeScript，提供完整的类型声明。

## ✨ 特性

- 🚀 轻量级，无外部依赖
- 💪 完整的 TypeScript 支持
- 📦 支持多种模块格式（ESM、CommonJS、UMD）
- 🔧 包含常用数学运算和工具函数
- 📝 完善的类型声明和文档

## 📦 安装

```bash
npm install @jokerxue/math-utils
```

或使用其他包管理器：

```bash
# pnpm
pnpm add @jokerxue/math-utils

# yarn
yarn add @jokerxue/math-utils
```

## 🚀 快速开始

### ESM（推荐）

```javascript
import { add, subtract, multiply, divide } from '@jokerxue/math-utils';

console.log(add(10, 5));       // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 5));    // 2
```

### CommonJS

```javascript
const { add, subtract, formatCurrency } = require('@jokerxue/math-utils');

console.log(add(10, 20));              // 30
console.log(formatCurrency(99.99));    // ¥99.99
```

### UMD（浏览器）

```html
<script src="https://unpkg.com/@jokerxue/math-utils/dist/index.umd.js"></script>
<script>
  console.log(MyMathUtils.add(5, 10));              // 15
  console.log(MyMathUtils.formatCurrency(199.99));  // ¥199.99
</script>
```

## 📖 API 文档

### 基础数学运算

#### `add(a: number, b: number): number`

两数相加。

```javascript
add(10, 5);  // 15
add(-5, 3);  // -2
```

#### `subtract(a: number, b: number): number`

两数相减。

```javascript
subtract(10, 5);  // 5
subtract(3, 8);   // -5
```

#### `multiply(a: number, b: number): number`

两数相乘。

```javascript
multiply(10, 5);  // 50
multiply(-2, 3);  // -6
```

#### `divide(a: number, b: number): number`

两数相除。除数不能为 0，否则抛出错误。

```javascript
divide(10, 5);   // 2
divide(7, 2);    // 3.5

// 除以 0 会抛出错误
try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);  // "除数不能为0"
}
```

### 格式化工具

#### `formatCurrency(value: number, currency?: string): string`

格式化数字为货币格式，保留两位小数。

**参数：**
- `value: number` - 要格式化的数字
- `currency?: string` - 货币符号，默认为 `¥`

```javascript
formatCurrency(99.99);       // "¥99.99"
formatCurrency(199.5);       // "¥199.50"
formatCurrency(99.99, '$');  // "$99.99"
formatCurrency(99.99, '€');  // "€99.99"
```

### 数组操作

#### `sum(numbers: number[]): number`

计算数组中所有数字的和。

```javascript
sum([1, 2, 3, 4, 5]);  // 15
sum([10, 20, 30]);     // 60
sum([]);               // 0
sum([-1, 1]);          // 0
```

#### `average(numbers: number[]): number`

计算数组中所有数字的平均值。空数组返回 0。

```javascript
average([1, 2, 3, 4, 5]);  // 3
average([10, 20, 30]);     // 20
average([]);               // 0
average([5]);              // 5
```

## 💡 使用示例

### 计算购物车总价

```javascript
import { sum, formatCurrency } from '@jokerxue/math-utils';

const prices = [29.99, 49.99, 19.99];
const total = sum(prices);

console.log(formatCurrency(total));  // "¥99.97"
```

### 计算平均分数

```javascript
import { average } from '@jokerxue/math-utils';

const scores = [85, 92, 78, 90, 88];
const avgScore = average(scores);

console.log(`平均分：${avgScore}`);  // "平均分：86.6"
```

### 价格计算

```javascript
import { multiply, subtract, formatCurrency } from '@jokerxue/math-utils';

const price = 99.99;
const quantity = 3;
const discount = 20;

const subtotal = multiply(price, quantity);
const total = subtract(subtotal, discount);

console.log(formatCurrency(total));  // "¥279.97"
```

## 🔧 TypeScript 支持

本库使用 TypeScript 编写，提供完整的类型声明：

```typescript
import { add, formatCurrency, sum } from '@jokerxue/math-utils';

// TypeScript 会自动推断类型
const result: number = add(10, 20);
const formatted: string = formatCurrency(99.99);
const total: number = sum([1, 2, 3]);

// 类型检查会在编译时捕获错误
// add('10', 20);  // ❌ 类型错误
// add(10);        // ❌ 参数不足
```

## 📦 包信息

- **主入口 (CommonJS)**: `dist/index.cjs.js`
- **ESM 入口**: `dist/index.esm.js`
- **UMD 入口**: `dist/index.umd.js`
- **类型声明**: `dist/index.d.ts`
- **包大小**: < 2KB (minified)

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm run build

# 运行测试
pnpm test

# 代码格式化
pnpm run format

# 代码检查
pnpm run lint
```

## 📄 许可证

[MIT](https://github.com/superboyzh/math-utils/blob/main/LICENSE) © MaShu

## 🔗 相关链接

- [GitHub 仓库](https://github.com/superboyzh/math-utils)
- [npm 包](https://www.npmjs.com/package/@jokerxue/math-utils)
- [问题反馈](https://github.com/superboyzh/math-utils/issues)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

使用 [Rsbuild](https://rsbuild.dev/) 构建 ⚡️
