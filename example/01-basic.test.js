const sum = require('./sum')

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})