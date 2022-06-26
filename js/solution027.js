//take in an array of numbers. negative and positive. possible empty array.
//return sum of all the positive numbers in the array. 
//const input = [ 1, -4, 12, 0, -3, 29, -150]; return 42
//wite function using filter and reduce to loop through array and add up all the positive numbers

function allPosNums(arr){
    return arr.filter(num => num > 0).reduce((a , b) => a + b, 0)
}
console.log(allPosNums([5,-3,7,-99,25,167]))