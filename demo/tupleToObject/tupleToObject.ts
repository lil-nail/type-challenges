export type MyTupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P 
}