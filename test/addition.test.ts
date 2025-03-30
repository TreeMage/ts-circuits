import type { HalfAdder, FullAdder, RippleCarryAdder,  } from "../src/additon.ts";

const HalfAdderTest1: HalfAdder<"0", "0"> = ["0", "0"]
const HalfAdderTest2: HalfAdder<"0", "1"> = ["0", "1"]
const HalfAdderTest3: HalfAdder<"1", "0"> = ["0", "1"]
const HalfAdderTest4: HalfAdder<"1", "1"> = ["1", "0"]

const FullAdderTest1: FullAdder<"0", "0", "0"> = ["0", "0"]
const FullAdderTest2: FullAdder<"0", "0", "1"> = ["0", "1"]
const FullAdderTest3: FullAdder<"0", "1", "0"> = ["0", "1"]
const FullAdderTest4: FullAdder<"0", "1", "1"> = ["1", "0"]
const FullAdderTest5: FullAdder<"1", "0", "0"> = ["0", "1"]
const FullAdderTest6: FullAdder<"1", "0", "1"> = ["1", "0"]
const FullAdderTest7: FullAdder<"1", "1", "0"> = ["1", "0"]
const FullAdderTest8: FullAdder<"1", "1", "1"> = ["1", "1"]


const RippleCarryAdderTest1: RippleCarryAdder<"1", "01"> = "Inputs need to be binary numbers and have the same length."
const RippleCarryAdderTest2: RippleCarryAdder<"01", "1"> = "Inputs need to be binary numbers and have the same length."
const RippleCarryAdderTest3: RippleCarryAdder<"abc", "01"> = "Inputs need to be binary numbers and have the same length."
const RippleCarryAdderTest4: RippleCarryAdder<"01", "abc"> = "Inputs need to be binary numbers and have the same length."

// 2 Bit Addition
// 1 + 1 = 2
const RippleCarryAdderTest7: RippleCarryAdder<"10", "10"> = "01"
// 1 + 3 = 4
const RippleCarryAdderTest8: RippleCarryAdder<"01", "11"> = "10"
// 3 + 3 = 6
const RippleCarryAdderTest9: RippleCarryAdder<"11", "11"> = "01"
// 2 + 3 = 5
const RippleCarryAdderTest10: RippleCarryAdder<"010", "110"> = "101"

// 3 Bit Addition
// 2 + 4 = 6
const RippleCarryAdderTest11: RippleCarryAdder<"010", "001"> = "011"
// 6 + 1 = 7
const RippleCarryAdderTest12: RippleCarryAdder<"0110", "0001"> = "0111"
// 1 + 5 = 6
const RippleCarryAdderTest13: RippleCarryAdder<"100", "101"> = "011"
// 4 + 5 = 9
const RippleCarryAdderTest14: RippleCarryAdder<"0010", "1010"> = "1001"
// 7 + 7 = 14
const RippleCarryAdderTest15: RippleCarryAdder<"1110", "1110"> = "0111"

// Overflow cases
// 2 + 2 = 0 mod 4
const RippleCarryAdderTest16: RippleCarryAdder<"01", "01"> = "00"
// 8 + 9 = 2 mod 16
const RippleCarryAdderTest17: RippleCarryAdder<"0001", "1001"> = "1000"
// 3 + 7 = 2 mod 8
const RippleCarryAdderTest18: RippleCarryAdder<"110", "111"> = "010"
