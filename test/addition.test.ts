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


const RippleCarryAdderTest1: RippleCarryAdder<["1"], ["0", "1"]> = "Inputs need to have the same length. Found 1 and 2."
const RippleCarryAdderTest2: RippleCarryAdder<["0", "1"], ["1"]> = "Inputs need to have the same length. Found 2 and 1."
const RippleCarryAdderTest3: RippleCarryAdder<number[], ["0", "1"]> = "A needs to be an array of bits."
const RippleCarryAdderTest4: RippleCarryAdder<["0", "1"], number[]> = "B needs to be an array of bits."

// 2 Bit Addition
// 1 + 1 = 2
const RippleCarryAdderTest7: RippleCarryAdder<["0", "1"], ["0", "1"]> = ["0", "0", "1"]
// 1 + 3 = 4
const RippleCarryAdderTest8: RippleCarryAdder<["1", "0"], ["1", "1"]> = ["0", "0", "1"]
// 3 + 3 = 6
const RippleCarryAdderTest9: RippleCarryAdder<["1", "1"], ["1", "1"]> = ["0", "1", "1"]
// 2 + 3 = 5
const RippleCarryAdderTest10: RippleCarryAdder<["0", "1"], ["1", "1"]> = ["1", "0", "1"]

// 3 Bit Addition
// 2 + 4 = 6
const RippleCarryAdderTest11: RippleCarryAdder<["0", "1", "0"], ["0", "1", "1"]> = ["0", "0", "0", "1"]
// 6 + 1 = 7
const RippleCarryAdderTest12: RippleCarryAdder<["0", "1", "1"], ["1", "0", "0"]> = ["1", "1", "1", "0"]
// 1 + 5 = 6
const RippleCarryAdderTest13: RippleCarryAdder<["1", "0", "0"], ["1", "0", "1"]> = ["0", "1", "1", "0"]
// 4 + 5 = 9
const RippleCarryAdderTest14: RippleCarryAdder<["0", "0", "1"], ["1", "0", "1"]> = ["1", "0", "0", "1"]
// 7 + 7 = 14
const RippleCarryAdderTest15: RippleCarryAdder<["1", "1", "1"], ["1", "1", "1"]> = ["0", "1", "1", "1"]