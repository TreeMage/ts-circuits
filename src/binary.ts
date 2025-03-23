export type Bit = "0" | "1";

export type Not<A> = A extends "0" ? "1" : "0";

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


