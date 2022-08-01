//The cockroach is one of the fastest insects. 
//Write a function which takes its speed in km per hour and returns it in cm per second,
//rounded down to the integer (= floored).
//For example: 1.08 --> 30
//Note! The input is a Real number and is >= 0. The result should be an Integer.

//take in integer or floating point integer
//return integer
//write function that takes in a speed in km per hour and multiplies it by 27.777778 
//which is the conversion rate to cm per second.
//then return new variable wrapped by Math.floor to round down final result. 
//easy peasy lemon squeezy

function cockroachSpeed(s) {
    let cmPerSec = s * 27.777778
    return Math.floor(cmPerSec)
   }