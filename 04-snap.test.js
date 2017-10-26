test('snapshot example', () => {
  const result = {some: 'object'}
  expect(result).toMatchSnapshot()
})