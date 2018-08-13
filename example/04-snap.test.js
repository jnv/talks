test('snapshot example', () => {
  const result = { some: 'object', other: 'stuff' }
  expect(result).toMatchSnapshot()
})