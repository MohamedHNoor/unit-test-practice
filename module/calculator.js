/* eslint-disable class-methods-use-this */
class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }

  substract(n1, n2) {
    return n1 - n2;
  }

  multiply(n1, n2) {
    return n1 * n2;
  }

  divide(n1, n2) {
    return n1 / n2;
  }
}
const calculate = new Calculator();

module.exports = calculate;
