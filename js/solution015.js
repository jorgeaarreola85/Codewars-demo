//take in an array that checks for boolean values and returns the amount of true values as an integer
//return an integer 
// for example [true,  true,  true,  false,
 // true,  true,  true,  true ,
 // true,  false, true,  false,
  //true,  false, false, true ,
  //true,  true,  true,  true ,
  //false, false, true,  true]
  // answer would be 17
  // write a function that takes in an array and uses maps to return the number of true values. 

  function countingSheep(arrayOfSheep){
      let count = 0
      for (let i = 0; i < arrayOfSheep.length; i++){
          if(arrayOfSheep[i] === true){
              count +=1;
          }
      }
      return count;
  }

  