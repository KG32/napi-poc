/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export declare function fibonacciRs(n: number): number
export const enum BulBulQueryType {
  First = 0,
  Last = 1
}
export declare class RustBulbulator {
  constructor(name: string)
  bulbul(): void
  timeSinceBulbul(query: BulBulQueryType): number | null
  get bulbubsCount(): number
}
