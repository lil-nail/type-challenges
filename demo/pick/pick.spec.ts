import { test, expect } from 'vitest'
import { MyPick } from './pick'

test('test my pick', () => {
  
  type Dog = {
    age: number;
    color: string;
    size: 'small' | 'large' | 'middle'
  }

  type agePick = MyPick<Dog, 'age'>
  
  type colorPick = MyPick<Dog, 'color'>
  
  type sizePick = MyPick<Dog, 'size'>

  const dogColor: colorPick = {
    color: 'red',
  }
  const dogSize: sizePick = {
    size: 'small',
  }
  const dogAge: agePick = {
    age: 12,
  }

  expect(dogColor.color).toEqual('red')

  expect(dogSize.size).toEqual('small')
  
  expect(dogAge.age).toEqual(12)
})