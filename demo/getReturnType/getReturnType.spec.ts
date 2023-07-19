import { test, expect } from 'vitest'
import { GetReturnType } from './getReturnType'

test('get return type', () => {
  const age = 23
  const personGenerator = () => ({
    age,
    work: 'developer'
  })

  type Person = GetReturnType<typeof personGenerator>
  
  const personA: Person = {
    age: 23,
    work: 'music producer'
  }
  
  // const = keyof FuncAReturn

  expect(personA.age).toEqual(age)
})