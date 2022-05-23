//take in positive integers
//return the summation of all the numbers from 1 up until variable num 
//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//write a function that takes in an integer and then returns the summation from 1 up until variable num

 function summation(num){
 let sum = 0
 for(let i = 1; i <= num; i++){
sum += i
 }
 return sum
 }
console.log(summation(15))
 

