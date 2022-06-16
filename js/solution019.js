//take in an array of integers. 
//return the average of the numbers in the array 
//examples for results
//write a function that takes in an array. returns the summation divided by the number of items in array in new array. use loop

function find_average(array) {
    // your code here
    let newArray = 0
    if(array === [] ){
    return 0;
    }
    for(let i = 0; i < array.length; i++){
    newArray += array[i] / array.length
    }
    return newArray
  }
  console.log(find_average([1,5,8,11]))