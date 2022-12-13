const capitalize = require('./capitalize');

test('capitalize string return String', () => {
  expect(capitalize('water')).toBe('Water');
});
