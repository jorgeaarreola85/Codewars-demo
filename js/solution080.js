//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//Examples: (Input --> Output)
//
//[] --> []
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//take in an array of strings
//return an array of strings with the original values with the line number and the coln + space in front
//assert.deepEqual(number([]), [], 'Empty array should return empty array');
//assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

//iterate over each array value and prepend the line

var number = function (array) {
  console.log(array.map((alpha, index) => `${index + 1}: ${alpha}`));
};
