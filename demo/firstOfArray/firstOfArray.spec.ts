import { test, expect } from 'vitest'
import { First, First2 } from './firstOfArray'

test('first of array', () => {
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

  type head1V2 = First2<arr1> // expected to be 'a'
  type head2V2 = First2<arr2> // expected to be 3

  // First
  const result1: head1 = 'a'
  const result2: head2 = 3

  expect(result1, 'a')
  expect(result2, '3')

  // First2
  const result1V2: head1V2 = 'a'
  const result2V2: head2V2 = 3

  expect(result1V2, 'a')
  expect(result2V2, '3')
})