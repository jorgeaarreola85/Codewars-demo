// take in array of integers
//return the smallest integer in the array
//Given [34, 15, 88, 2] your solution will return 2
//create a function to useing Math.min method to return smallest number in array. Use spread notation. 


    function findSmallestInt(args){
      console.log(Math.min(...args))
    }
  findSmallestInt([9,11,20,111])