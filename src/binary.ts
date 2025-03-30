export type Bit = "0" | "1";

type IsBinaryNumber<A> = A extends `${Bit}${infer Tail}` ? IsBinaryNumber<Tail> : A extends "" ? true : false;
type HaveSameLength<A, B> = 
  A extends "" ?
    B extends "" ?
        true
    : false
  : A extends `${infer _}${infer TailA}` ?
    B extends `${infer _}${infer TailB}` ?
        HaveSameLength<TailA, TailB>
    : false
  : false;

export type LogicalAnd<A extends boolean, B extends boolean> = 
  A extends true ?
    B extends true ?
        true
    : false
  : false;


// Bit-level operations 
export type BitNot<A extends Bit> = A extends "0" ? "1" : "0";
export type BitOr<A extends Bit, B extends Bit> = A extends "1" ? "1" : B extends "1" ? "1" : "0";
export type BitAnd<A extends Bit, B extends Bit> = A extends "0" ? "0" : B extends "0" ? "0" : "1";
export type BitXor<A extends Bit, B extends Bit> = A extends "0" ? B : B extends "0" ? A : "0";
export type BitNand<A extends Bit, B extends Bit> = A extends "0" ? "1" : B extends "0" ? "1" : "0";


// Unary operations on binary numbers
type UnaryBitLevelOperations = 'BitNot';
type ApplyUnaryBitLevelOperation<Op extends UnaryBitLevelOperations, A extends Bit> = 
  Op extends 'BitNot' ? BitNot<A> :
  never;

// Binary operations on binary numbers
type BinaryBitLevelOperations = 'BitOr' | 'BitAnd' | 'BitXor' | 'BitNand';
type ApplyBinaryBitLevelOperation<Op extends BinaryBitLevelOperations, A extends Bit, B extends Bit> = 
  Op extends 'BitOr' ? BitOr<A, B> :
  Op extends 'BitAnd' ? BitAnd<A, B> :
  Op extends 'BitXor' ? BitXor<A, B> :
  Op extends 'BitNand' ? BitNand<A, B> :
  never;


// Applies the given unary operation to each bit of the binary number
export type UnaryBitWiseOperation<Op extends UnaryBitLevelOperations, A> = 
  IsBinaryNumber<A> extends true ?
    A extends `${infer Head extends Bit}${infer Tail}` ?
      `${ApplyUnaryBitLevelOperation<Op, Head>}${UnaryBitWiseOperation<Op, Tail>}` :
      "" :
    never;

// Applies the given binary operation to each bit of the binary numbers
export type BinaryBitWiseOperation<Op extends BinaryBitLevelOperations, A, B> = 
  LogicalAnd<LogicalAnd<IsBinaryNumber<A>, IsBinaryNumber<B>>, LogicalAnd<HaveSameLength<A, B>, true>> extends true ?
    A extends `${infer HeadA extends Bit}${infer TailA}` ? 
      B extends `${infer HeadB extends Bit}${infer TailB}` ? 
        `${ApplyBinaryBitLevelOperation<Op, HeadA, HeadB>}${BinaryBitWiseOperation<Op, TailA, TailB>}` : 
      "" : 
    "" : 
  never;


export type Not<A> = UnaryBitWiseOperation<'BitNot', A>;
export type Or<A, B> = BinaryBitWiseOperation<'BitOr', A, B>;
export type And<A, B> = BinaryBitWiseOperation<'BitAnd', A, B>;
export type Xor<A, B> = BinaryBitWiseOperation<'BitXor', A, B>;
export type Nand<A, B> = BinaryBitWiseOperation<'BitNand', A, B>;