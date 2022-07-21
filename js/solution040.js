//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.

//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!

//Note:
//Your points are not included in the array of your class's points. 
//For calculating the average point you may add your point to the given array!



//take in an array and a number
//return true or false
//examples console.log(betterThanAverage([3,2,11,19], 15))
  //console.log(betterThanAverage([3,2,11,19], 6))
//write function that takes in an two parameters. 
//use array.reduce to find averag of class scores of numbers in array. 
//use ternary to compare to our score and return boolean value. 

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a + b, 0) / classPoints.length < yourPoints ? true : false
  }
  console.log(betterThanAverage([3,2,11,19], 15))
  console.log(betterThanAverage([3,2,11,19], 6))