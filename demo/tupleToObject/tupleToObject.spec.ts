import { expect, test } from 'vitest'
import { MyTupleToObject } from './tupleToObject'

test('test my tupleToObject', () => {
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

    type TypeResult = MyTupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

    type TypeTarget = {
      tesla: 'tesla',
      'model 3': 'model 3',
      'model X': 'model X',
      'model Y': 'model Y'
    }

    type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

    const result: IsEqual<TypeTarget, TypeResult> = true

    tuple.forEach((item) => {
      expect(result).toEqual(true)
    })
    
})

