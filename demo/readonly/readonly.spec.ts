import { test, expect } from 'vitest'
import { MyReadOnly } from './readonly'

test('test my readonly', () => {
  
  type Dog = {
    age: number;
    color: string;
    size: 'small' | 'large' | 'middle'
  }

  type ReadOnlyDog = MyReadOnly<Dog>;

  const dogReadOnly: ReadOnlyDog = {
    color: 'red',
    age: 88,
    size: 'large'
  }

  dogReadOnly.age = 33; // Cannot assign to 'size' because it is a read-only property.
  
  dogReadOnly.color = 'green'; // Cannot assign to 'size' because it is a read-only property.

  dogReadOnly.size = 'small'; // Cannot assign to 'size' because it is a read-only property.

  expect(dogReadOnly.color).toEqual('green')

  expect(dogReadOnly.size).toEqual('small')
  
  expect(dogReadOnly.age).toEqual(33)

  expect(dogReadOnly).toEqual({
    color: 'green',
    size: 'small',
    age: 33,
  })
})