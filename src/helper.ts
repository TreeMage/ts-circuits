import { Bit } from "./binary";

export type At<
    A extends Bit[], 
    B extends number, 
    Count extends any[] = []
> = A extends [infer Head, ...infer Tail] ? 
  Tail extends Bit[] ? Count["length"] extends B ? 
    Head : At<Tail, B, [...Count, any]> 
  : never : `Error: Index ${B} is out of bounds for array of length ${Count["length"]}`;


export type Reverse<A extends any[], Stack extends any[] = []> = 
      A extends [infer Head, ...infer Tail] ?
        Reverse<Tail, [Head, ...Stack]>
      : Stack


// Remove all leading zeros from a binary array.
type _BinarySimplify<A extends Bit[], Reversed extends Bit[] = Reverse<A>> = 
    Reversed extends [infer Head, ...infer Tail] ?
        Head extends "0" ? 
            Tail extends Bit[] ?
                _BinarySimplify<[], Tail> : 
            []
        : Reverse<[Head, ...Tail]>
    : []

// Remove all leading zeros from a binary array. If the result is an empty array, return ["0"].
export type BinarySimplify<A extends Bit[]> = _BinarySimplify<A>["length"] extends 0 ?
    ["0"]: _BinarySimplify<A>
      
