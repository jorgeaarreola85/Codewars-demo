//Given the triangle of consecutive odd numbers:
//
//             1                        =1
//          3     5                     =8
//       7     9    11                  =27
//   13    15    17    19               =64
//21    23    25    27    29
//...
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
//1 -->  1
//assert.strictEqual(rowSumOddNumbers(42), 74088);
//take in a triangle of consecutive odd numbers with n rows, input is row number
//return the sum of the numbers in row n

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
