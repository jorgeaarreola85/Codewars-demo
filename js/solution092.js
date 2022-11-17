//'m new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.

//Take in two arrays
//Return one integer that is a summation of the two sums of the arrays
//examples
//assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//write function that takes two arrays as parameters
//and then use reduce to find the sum of each array and then add them together

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}
