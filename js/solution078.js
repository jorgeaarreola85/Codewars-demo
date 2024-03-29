//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//
//Examples:
//
//Testing: [0, 0, 0, 1] ==> 1
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 0, 1] ==> 5
//Testing: [1, 0, 0, 1] ==> 9
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 1, 0] ==> 6
//Testing: [1, 1, 1, 1] ==> 15
//Testing: [1, 0, 1, 1] ==> 11
//However, the arrays can have varying lengths, not just limited to 4.
//take in an array containing ones and 0's could be varrying length
//return an integer of the binary value represented in the array
//take the array and join the elemets together into a string and then convert into a binary
//using that string and then return the integer equivalent.
//Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};
binaryArrayToNumber([1, 1, 1, 1]);
