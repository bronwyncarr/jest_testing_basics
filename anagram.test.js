const { TestScheduler } = require('jest')
const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function')
})

test('check cinema isAnagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('check dormitory isAnagram of DiRTy Room', () => {
  expect(isAnagram('dormitory', 'Dirty Room')).toBeTruthy()
})

test('check hello is not an anagram of cat', () => {
  expect(isAnagram('hello', 'cat')).toBeFalsy()
})