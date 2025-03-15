import type { Bit, At, Or, And, Xor } from "./binary.ts"

// HalfAdder<A,B> = [AB, A XOR B] = [Carry, Sum]
export type HalfAdder<A, B> = [And<A,B>, Xor<A,B>];

// FullAdder<A,B,C> = [A XOR B XOR C, AB + AC + BC] = [Carry, Sum]
export type FullAdder<A, B, C = "0"> = 
  HalfAdder<A, B> extends [infer AB, infer C2] ? 
  HalfAdder<C, C2> extends [infer T, infer S] ? 
    [Or<AB, T>, S]
  : never
  : never

export type RippleCarryAdder<A, B, C = "0", Count extends any[] = [], Out extends Bit[] = []> = 
  A extends Bit[] ? 
  B extends Bit[] ? 
  A["length"] extends B["length"] ? 
    Count["length"] extends A["length"] ? 
      // If we've reached the end of the array, return the output
      [...Out, C] :
      // Otherwise, add the current bit to the output and carry
      FullAdder<At<A, Count["length"]>, At<B, Count["length"]>, C> extends [infer NewCarry, infer Sum] ? 
        Sum extends Bit ? 
          RippleCarryAdder<A, B, NewCarry, [...Count, any], [...Out, Sum]>
        : "Sum returned by FullAdder is not a bit."
      : "Output returned by FullAdder is not an array of shape [Sum, Carry]."
  : `Inputs need to have the same length. Found length ${A["length"]} and ${B["length"]}.`
  : 'B needs to be an array of bits.'
  : 'A needs to be an array of bits.'