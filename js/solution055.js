//Write a function get_char() / getChar() which takes a number
//and returns the corresponding ASCII char for that value.
//
//Example:
//
//get_char(65)
//should return:
//
//'A'

//take in an integer
//return a string of the ascii character corresponding to that value
//use Sting.fromCharCode() method.

function getChar(c) {
  return String.fromCharCode(c);
}
