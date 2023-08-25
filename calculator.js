const calculator = (a, b, c) => {
  if (typeof (a && b) !== 'number') throw new Error('операнды должны быть в числовом формате')
  if (typeof c !== 'string') throw new Error('оператор должен быть в строковом формате')
  if (c === '+') return a + b
  if (c === '-') return a - b
  if (c === '*') return a * b
  if (c === '/') return a / b
  throw new Error('данный калькулятор поддеерживает только четыре действия: +, -, *, /')
}

console.log(calculator(10, 15, '-'))

