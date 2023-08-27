const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateData = {}


const promptForData = () => {
  rl.question('Введите первое число: ', firstNumber => {
    calculateData.firstNumber = firstNumber;

    rl.question('Ввведите оператор: ', operator => {
      calculateData.operator = operator;

      rl.question('Введите второе число: ', secondNumber => {
        calculateData.secondNumber = secondNumber;

        calculator(calculateData);
        rl.close();
      }) 
    })
  })
}

const calculator = ({ firstNumber, operator, secondNumber }) => {
  const a = +firstNumber
  const b = +secondNumber
  if (typeof operator !== 'string') throw new Error('оператор должен быть в строковом формате')
  if (operator === '+') return console.log('ответ:', a + b)
  if (operator === '-') return console.log('ответ:', a - b)
  if (operator === '*') return console.log('ответ:', a * b)
  if (operator === '/') return console.log('ответ:', a / b)
  throw new Error('данный калькулятор поддеерживает только четыре действия: +, -, *, /')
}

promptForData()