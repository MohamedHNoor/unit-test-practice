const stringLength = require('./stringLength');

test('stringLength of dog to equel 3', () => {
  expect(stringLength('dog')).toBe(3);
});

test('string Length longer than 10', () => {
  expect(stringLength('MohamedHNoor')).toBe(
    'MohamedHNoor is longer or less than the required length',
  );
});

test('string Length less than 1', () => {
  expect(stringLength('')).toBe(' is longer or less than the required length');
});
