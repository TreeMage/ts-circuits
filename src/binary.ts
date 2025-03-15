export type Bit = "0" | "1";

export type Or<A, B> = 
    [A, B] extends ["0", "0"] ? "0" : 
    [A, B] extends ["1", "0"] ? "1" : 
    [A, B] extends ["0", "1"] ? "1" : 
    [A, B] extends ["1", "1"] ? "1" : 
                                never;

export type And<A, B> = 
    [A, B] extends ["0", "0"] ? "0" : 
    [A, B] extends ["1", "0"] ? "0" : 
    [A, B] extends ["0", "1"] ? "0" : 
    [A, B] extends ["1", "1"] ? "1" : 
                                never;

export type Xor<A, B> = 
    [A, B] extends ["0", "0"] ? "0" : 
    [A, B] extends ["1", "0"] ? "1" : 
    [A, B] extends ["0", "1"] ? "1" : 
    [A, B] extends ["1", "1"] ? "0" : 
                                never;

export type At<A extends Bit[], B extends number, Count extends any[] = []> = A extends [infer Head, ...infer Tail] ? 
    Tail extends Bit[] ? 
        Count["length"] extends B ? Head : At<Tail, B, [...Count, any]>
    : never
    : `Error:Index ${B} is out of bounds for array of length ${Count["length"]}`;

