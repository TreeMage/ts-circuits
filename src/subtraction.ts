import type { Bit, And, Not, Xor, Or, LogicalAnd, IsBinaryNumber, HaveSameLength } from "./binary.ts"

// HalfSubtractor<A, B> = [(NOT A) AND B, A XOR B] = [Borrow, Difference]
export type HalfSubtractor<A, B> = [And<Not<A>, B>, Xor<A, B>];


export type FullSubtractor<A, B, C = "0"> = 
  HalfSubtractor<A, B> extends [infer Borrow, infer Difference] ? 
  HalfSubtractor<Difference, C> extends [infer NewBorrow, infer NewDifference] ? 
    [Or<Borrow, NewBorrow>, NewDifference]
  : never
  : never

export type RippleCarrySubtractor<A, B, C = "0"> =
  LogicalAnd<LogicalAnd<IsBinaryNumber<A>, IsBinaryNumber<B>>, HaveSameLength<A, B>> extends true ?
    A extends `${infer HeadA extends Bit}${infer TailA}` ?
      B extends `${infer HeadB extends Bit}${infer TailB}` ?
        FullSubtractor<HeadA, HeadB, C> extends [infer newBorrow, infer Difference extends Bit] ?
          `${Difference}${RippleCarrySubtractor<TailA, TailB, newBorrow>}` : 
          "Difference returned by FullSubtractor."  
      : ""
    : ""
  : "Inputs need to be binary numbers and have the same length."

