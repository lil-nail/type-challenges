import { describe } from 'vitest'
import { First, First2 } from './firstOfArray'

describe('first of array', () => {
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

  type head1V2 = First2<arr1> // expected to be 'a'
  type head2V2 = First2<arr2> // expected to be 3

  const result1: head1 = 'a'
  const result2: head2 = 3
  const result1V2: head1V2 = 'a'
  const result2V2: head2V2 = 3
})