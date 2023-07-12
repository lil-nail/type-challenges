import { expect, test } from "vitest";
import { MyIsEqual } from "./IsEqual";

type NumberTypeEqual = MyIsEqual<number, number>
const numberTypeEqual: NumberTypeEqual = true

type NumberEqual = MyIsEqual<1, 2>
const numberEqual: NumberEqual = false

type AndEqual = MyIsEqual<2 | 3, 3 | 2>
const andEqual: AndEqual = true

type ArrayEqual = MyIsEqual<[1, 3, 5, 7, 9], [1, 3, 5, 7, 9]>
const arrayEqual: ArrayEqual = true

test('Check My IsEqual', () => {
  expect(numberTypeEqual)
  expect(numberEqual)
  expect(andEqual)
  expect(arrayEqual)
})