const reverseString = require('./reverseString');

test('reversed string of bad equals dab', () => {
  expect(reverseString('bad')).toBe('dab');
});
