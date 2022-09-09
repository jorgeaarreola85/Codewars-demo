//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//take in a string of numbers
//return a string
//split string into an array and maop through it to check if each digit is 5 or bigger and replace that wihh 0 or smaller than 5 and replace that with 1. then rejoing the string

function fakeBin(x) {
  return x
    .split("")
    .map((y) => (y < 5 ? 0 : 1))
    .join("");
}
