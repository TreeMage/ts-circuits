import type { HalfSubtractor, FullSubtractor, RippleCarrySubtractor } from "../src/subtraction.ts";

// Half Subtractor Test Cases
const HalfSubtractorTest1: HalfSubtractor<"0", "0"> = ["0", "0"]
const HalfSubtractorTest2: HalfSubtractor<"0", "1"> = ["1", "1"]
const HalfSubtractorTest3: HalfSubtractor<"1", "0"> = ["0", "1"]
const HalfSubtractorTest4: HalfSubtractor<"1", "1"> = ["0", "0"]

// Full Subtractor Test Cases
const FullSubtractorTest1: FullSubtractor<"0", "0", "0"> = ["0", "0"]
const FullSubtractorTest2: FullSubtractor<"0", "0", "1"> = ["1", "1"]
const FullSubtractorTest3: FullSubtractor<"0", "1", "0"> = ["1", "1"]
const FullSubtractorTest4: FullSubtractor<"0", "1", "1"> = ["1", "0"]
const FullSubtractorTest5: FullSubtractor<"1", "0", "0"> = ["0", "1"]
const FullSubtractorTest6: FullSubtractor<"1", "0", "1"> = ["0", "0"]
const FullSubtractorTest7: FullSubtractor<"1", "1", "0"> = ["0", "0"]
const FullSubtractorTest8: FullSubtractor<"1", "1", "1"> = ["1", "1"]

// Ripple Carry Subtractor Test Cases
const RippleCarrySubtractorTest1: RippleCarrySubtractor<"0", "0"> = "0";
const RippleCarrySubtractorTest2: RippleCarrySubtractor<"0", "1"> = "1";
const RippleCarrySubtractorTest3: RippleCarrySubtractor<"1", "0"> = "1";
const RippleCarrySubtractorTest4: RippleCarrySubtractor<"1", "1"> = "0";

// 7 - 4
const RippleCarrySubtractorTest5: RippleCarrySubtractor<"111", "100"> = "011";
// 16 - 10
const RippleCarrySubtractorTest6: RippleCarrySubtractor<"00001", "01010"> = "01100";
// 12 - 12
const RippleCarrySubtractorTest7: RippleCarrySubtractor<"0011", "0011"> = "0000";
// 8 - 1
const RippleCarrySubtractorTest8: RippleCarrySubtractor<"0001", "1000"> = "1110";

// Overflow Test Cases

/* 4 - 7 = -3 mod 8 = 5 mod 8

001
111
----
1

1. 0 - 1 - 0 = 1 B 1
2. 0 - 1 - 1 = 0 B 1
3. 1 - 1 - 1 = 1 B 1

*/
const RippleCarrySubtractorTest9: RippleCarrySubtractor<"001","111"> = "101";

/* 10 - 16 mod 16 = - 6 mod 16 = 26 mod 16

01010
00001
-----
01011

1. 0 - 0 - 0 = 0 B 0
2. 1 - 0 - 0 = 1 B 0
3. 0 - 0 - 0 = 0 B 0
4. 1 - 0 - 0 = 1 B 0
5. 0 - 1 - 0 = 1 B 1

*/
const RippleCarrySubtractorTest10: RippleCarrySubtractor<"01010", "00001"> = "01011";


/* 1 - 8 mod 16 = -7 mod 16 = 9 mod 16 

1000
0001
----
1001

1. 1 - 0 - 0 = 1 B 0
2. 0 - 0 - 0 = 0 B 0
3. 0 - 0 - 0 = 0 B 0
4. 0 - 0 - 1 = 1 B 1

*/
const RippleCarrySubtractorTest11: RippleCarrySubtractor<"1000", "0001"> = "1001";





