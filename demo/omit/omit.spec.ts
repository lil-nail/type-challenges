import { test, expect } from 'vitest'
import { MyOmit } from './omit'

test('test my pick', () => {
  
  type Dog = {
    age: number;
    color: string;
    size: 'small' | 'large' | 'middle'
  }

  type WithoutAgePick = MyOmit<Dog, 'age'>
  
  type WithoutColorPick = MyOmit<Dog, 'color'>
  
  type WithoutSizePick = MyOmit<Dog, 'size'>

  type WithoutAllPick = MyOmit<Dog, 'age' | 'color' | 'size'>

  const withoutDogColor: WithoutColorPick = {
    age: 12,
    size: 'small',
  }

  const withoutDogSize: WithoutSizePick = {
    age: 12,
    color: 'red',
  }

  const withoutDogAge: WithoutAgePick = {
    color: 'red',
    size: 'small',
  }

  const withoutAllDog: WithoutAllPick = {}

  expect(withoutDogColor.color).toEqual(undefined)

  expect(withoutDogSize.size).toEqual(undefined)
  
  expect(withoutDogAge.age).toEqual(undefined)

  expect(withoutAllDog).toEqual({})
})