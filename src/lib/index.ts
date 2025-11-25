/**
 * 一个简单的数学工具库
 */

/**
 * 加法运算
 * @param a - 第一个数字
 * @param b - 第二个数字
 * @returns 两数之和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 减法运算
 * @param a - 被减数
 * @param b - 减数
 * @returns 两数之差
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 乘法运算
 * @param a - 第一个因数
 * @param b - 第二个因数
 * @returns 两数之积
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 除法运算
 * @param a - 被除数
 * @param b - 除数
 * @returns 两数之商
 * @throws 当除数为0时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为0');
  }
  return a / b;
}

/**
 * 格式化数字为货币格式
 * @param value - 要格式化的数字
 * @param currency - 货币符号，默认为 ¥
 * @returns 格式化后的字符串
 */
export function formatCurrency(value: number, currency: string = '¥'): string {
  return `${currency}${value.toFixed(2)}`;
}

/**
 * 数组求和
 * @param numbers - 数字数组
 * @returns 数组所有元素的和
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * 数组求平均值
 * @param numbers - 数字数组
 * @returns 数组的平均值
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}
