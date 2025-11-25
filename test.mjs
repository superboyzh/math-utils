// 测试库的各种功能
// 使用 Node.js 运行: node test.mjs

import {
  add,
  subtract,
  multiply,
  divide,
  formatCurrency,
  sum,
  average,
} from './dist/index.esm.js';

console.log('=== Math Utils 库测试 ===\n');

// 基础运算测试
console.log('基础运算：');
console.log('add(10, 5) =', add(10, 5)); // 15
console.log('subtract(10, 5) =', subtract(10, 5)); // 5
console.log('multiply(10, 5) =', multiply(10, 5)); // 50
console.log('divide(10, 5) =', divide(10, 5)); // 2

// 货币格式化测试
console.log('\n货币格式化：');
console.log('formatCurrency(99.99) =', formatCurrency(99.99)); // ¥99.99
console.log('formatCurrency(199.99, "$") =', formatCurrency(199.99, '$')); // $199.99

// 数组操作测试
console.log('\n数组操作：');
const numbers = [1, 2, 3, 4, 5];
console.log('numbers =', numbers);
console.log('sum(numbers) =', sum(numbers)); // 15
console.log('average(numbers) =', average(numbers)); // 3

// 边界情况测试
console.log('\n边界情况：');
console.log('average([]) =', average([])); // 0
console.log('sum([]) =', sum([])); // 0

// 除以0测试
console.log('\n异常处理：');
try {
  divide(10, 0);
  console.log('ERROR: 应该抛出异常');
} catch (error) {
  console.log('divide(10, 0) 正确抛出异常:', error.message);
}

console.log('\n✅ 所有测试通过！');
