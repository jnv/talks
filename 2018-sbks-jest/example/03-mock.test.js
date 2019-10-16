jest.mock('./sum')
const sum = require('./sum')
// Sum has been loaded from ./__mocks__/sum

test('sum is a mock', () => {
  expect(sum.mock).toBeDefined()
})

test('mocking return value', () => {
  sum.mockReturnValue(4)
  expect(sum(10, 22)).toBe(4)
})

test('mocking implementation', () => {
  sum.mockImplementation((a, b) => a * b)
  expect(sum(3, 3)).toBe(9)
})