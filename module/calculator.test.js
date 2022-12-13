const calculate = require('./calculator');

describe('add', () => {
  test('test.add 3, 5 equal 8', () => {
    expect(calculate.add(3, 5)).toBe(8);
  });

  test('test.add 5, 5 equal 10', () => {
    expect(calculate.add(5, 5)).toBe(10);
  });

  test('test.add 20, 5 equal 25', () => {
    expect(calculate.add(20, 5)).toBe(25);
  });
});

describe('substract', () => {
  test('test.substract 20, 10 equals 10', () => {
    expect(calculate.substract(20, 10)).toBe(10);
  });

  test('test.substract 40, 10 equals 30', () => {
    expect(calculate.substract(40, 10)).toBe(30);
  });

  test('test.substract 70, 10 equals 60', () => {
    expect(calculate.substract(70, 10)).toBe(60);
  });
});

describe('multiply', () => {
  test('test.multiply 5, 5 equals 25', () => {
    expect(calculate.multiply(5, 5)).toBe(25);
  });

  test('test.multiply 4, 5 equals 20', () => {
    expect(calculate.multiply(4, 5)).toBe(20);
  });

  test('test.multiply 3, 3 equals 9', () => {
    expect(calculate.multiply(3, 3)).toBe(9);
  });
});

describe('divide', () => {
  test('test.divide 10, 2 equals 5', () => {
    expect(calculate.divide(10, 2)).toBe(5);
  });

  test('test.divide 9, 3 equals 3', () => {
    expect(calculate.divide(9, 3)).toBe(3);
  });

  test('test.divide 30, 3 equals 10', () => {
    expect(calculate.divide(30, 3)).toBe(10);
  });
});
