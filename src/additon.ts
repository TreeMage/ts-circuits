import type { Bit, Or, And, Xor, IsBinaryNumber, LogicalAnd, HaveSameLength } from "./binary.ts"

// HalfAdder<A,B> = [AB, A XOR B] = [Carry, Sum]
export type HalfAdder<A, B> = [And<A,B>, Xor<A,B>];

// FullAdder<A,B,C> = [A XOR B XOR C, AB + AC + BC] = [Carry, Sum]
export type FullAdder<A, B, C = "0"> = 
  HalfAdder<A, B> extends [infer AB, infer C2] ? 
  HalfAdder<C, C2> extends [infer T, infer S] ? 
    [Or<AB, T>, S]
  : never
  : never

export type RippleCarryAdder<A, B, C = "0"> = 
  LogicalAnd<LogicalAnd<IsBinaryNumber<A>, IsBinaryNumber<B>>, HaveSameLength<A, B>> extends true ?
    A extends `${infer HeadA extends Bit}${infer TailA}` ?
      B extends `${infer HeadB extends Bit}${infer TailB}` ?
        FullAdder<HeadA, HeadB, C> extends [infer NewCarry, infer Sum extends Bit] ?
          `${Sum}${RippleCarryAdder<TailA, TailB, NewCarry>}` :
          "Sum returned by FullAdder is not a bit."
        : ""
      : ""
  : "Inputs need to be binary numbers and have the same length."
