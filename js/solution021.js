//take in an integer
//return return an integer of each digit in the original number squared and concactenated
//example 9119 becomes 811181 because 9 squared is 81 and 1 squared is 1
//write a function that takes in a number converts it to a string then use a for loop to loop through each letter in the string. 
//Use parseInt to convert back to number and square the number and concactenate the numbers and return that number as an integer


function squareDigits(num){
    let strNum = String(num)
    let result = ""
    
    for(let i = 0; i < strNum.length; i++){
      let squared = parseInt(strNum[i]) * parseInt(strNum[i])
      result = result + String(squared)
    }
    return parseInt(result)
  }