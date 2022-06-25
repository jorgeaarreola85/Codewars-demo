//take in an array of integers
//return each element in the array squared
//example const input = [1,2,3,4] return [1,4,9,16]
//write function that uses map to loop through and 

function squareErrNum(num){
    return num.map(number => Math.pow(number,2))
}

console.log(squareErrNum([2,3,4]))