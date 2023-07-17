export type First<T extends any[]> = T extends [] ? never : T[0]

export type First2<T extends any[]> = T extends [infer First, ...infer rest] ? First : never