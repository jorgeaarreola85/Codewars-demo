// take in an array of numbers
// return the sum of the positive integers in the array 
// [1,-4,7,12] => 1 + 7 + 12 = 20
// create a function that takes in an array of integers. 
//create a loop through the array and return any positive integers and sum them up

function sumOfPositive(arr){ 
 let sum = 0;
 for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0 ) sum += arr[i]
} 
 return sum 
    }
 

console.log(sumOfPositive([5,-1,1,2])) ///