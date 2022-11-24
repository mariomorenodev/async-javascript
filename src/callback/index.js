function sum(num1, num2) {
  return num1 + num2
}

function rest(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

setTimeout(function () {
  console.log(calc(6, 2, sum))
  console.log(calc(6, 2, rest))
}, 3000)

setTimeout(() => {
  console.log(calc(6, 2, multiply))
}, 3000)

function greeting(name) {
  console.log(`Hello ${name}`)
}

setTimeout(greeting, 3000, 'Jhon')
