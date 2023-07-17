export type MyOmit<T, K extends keyof T> = {
  [key in keyof T as Exclude<key, K>]: T[key]
}