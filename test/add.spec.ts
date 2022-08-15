function sum(a: number, b: number) {
  return a + b
}

it('add', () => {
  expect(sum(1, 2)).toBe(3)
})
