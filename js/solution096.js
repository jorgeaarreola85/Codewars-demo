//An element is leader if it is greater than The Sum all the elements to its right side.
//
//Task
//Given an array/list [] of integers , Find all the LEADERS in the array.
//
//Notes
//Array/list size is at least 3 .
//
//Array/list's numbers Will be mixture of positives , negatives and zeros
//
//Repetition of numbers in the array/list could occur.
//
//Returned Array/list should store the leading numbers in the same order in the original array/list .
//
//Input >> Output Examples
//arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
let arrayLeaders = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    //loop through array
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      //start one position right of the main loop element
      sum += numbers[j]; //add all those numbers together
    }

    if (numbers[i] > sum) {
      //compare that sum to the initial number
      answer.push(numbers[i]); //if it's bigger push it to the answer array
    }
  }
  return answer; //return it like it's defective
};
