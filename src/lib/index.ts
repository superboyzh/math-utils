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

/**
 * 计算阶乘
 * @param n - 非负整数
 * @returns n 的阶乘
 * @throws 当 n 为负数时抛出错误
 */

export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('阶乘仅定义于非负整数');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * 计算斐波那契数列的第 n 项
 * @param n - 非负整数
 * @returns 斐波那契数列的第 n 项
 * @throws 当 n 为负数时抛出错误
 */

export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('斐波那契数列仅定义于非负整数');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let a = 0,
    b = 1,
    result = 1;
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
