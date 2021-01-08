const { TestScheduler } = require('jest')
const reverseString = require('./reverseString')

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('String reverses', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('String reverses with uppercase letters', () => {
  expect(reverseString('HELLO')).toBe('olleh')
})
