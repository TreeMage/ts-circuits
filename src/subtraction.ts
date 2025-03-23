import type { Bit, And, Not, Xor, Or, At } from "./binary.ts"

// HalfSubtractor<A, B> = [(NOT A) AND B, A XOR B] = [Borrow, Difference]
export type HalfSubtractor<A, B> = [And<Not<A>, B>, Xor<A, B>];


export type FullSubtractor<A, B, C = "0"> = 
  HalfSubtractor<A, B> extends [infer Borrow, infer Difference] ? 
  HalfSubtractor<Difference, C> extends [infer NewBorrow, infer NewDifference] ? 
    [Or<Borrow, NewBorrow>, NewDifference]
  : never
  : never

export type RippleCarrySubtractor<A, B, C = "0", Count extends any[] = [], Out extends Bit[] = []> =
  A extends Bit[] ? 
  B extends Bit[] ? 
  A["length"] extends B["length"] ? 
    Count["length"] extends A["length"] ? 
      [...Out, C] :
      FullSubtractor<At<A, Count["length"]>, At<B, Count["length"]>, C> extends [infer NewBorrow, infer NewDifference] ? 
        NewDifference extends Bit ? 
          RippleCarrySubtractor<A, B, NewBorrow, [...Count, any], [...Out, NewDifference]>
        : "Difference returned by FullSubtractor is not a bit."
      : "Difference returned by FullSubtractor is not an array of shape [Difference, Borrow]."
    : `Inputs need to have the same length. Found ${A["length"]} and ${B["length"]}`
  : `B needs to be an array of bits.`
  : `A needs to be an array of bits.`

