const calculadora = require('../../model/calculadora');

test('soma 2 + 2', () => {
  expect(calculadora.soma(2, 2)).toBe(4);
});
