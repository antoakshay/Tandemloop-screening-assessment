// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
// Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

function callCalculator(a, b, operation) {
  operation = operation.toLowerCase();
  if (operation === "add") {
    return new Calculator(a, b).add();
  }
  if (operation === "subtract") {
    return new Calculator(a, b).subtract();
  }
  if (operation === "multiply") {
    return new Calculator(a, b).multiply();
  }
  if (operation === "divide") {
    return new Calculator(a, b).divide();
  }
}

// console.log(callCalculator(10, 20, "add"));
// console.log(callCalculator(10, 20, "subtract"));
// console.log(callCalculator(10, 20, "multiply"));
console.log(callCalculator(10, 20, "divide"));
