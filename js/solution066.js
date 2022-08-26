//An anagram is the result of rearranging the letters of a word to produce a new word.
//Note: anagrams are case insensitive
//Complete the function to return true if the two arguments given are anagrams of each other;
//return false otherwise.
//
//Examples
//"foefet" is an anagram of "toffee"
//"Buckethead" is an anagram of "DeathCubeK"
//Take in two strings
//return boolean value
//Compare one storted string to another sorted string to see if they both contain the same letters.

function isAnagram(test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
}
