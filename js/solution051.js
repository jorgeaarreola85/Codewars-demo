//Our fruit guy has a bag of fruit (represented as an array of strings)
//where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones.
//For example, given ["apple","rottenBanana","apple"] 
//the replaced array should be ["apple","banana","apple"]. 
//Your task is to implement a method that accepts an array of strings containing fruits 
//and should returns an array of strings where all the rotten fruits are replaced by good ones.
//
//Notes
//If the array is null/nil/None or empty you should return empty array ([]).
//The rotten fruit name will be in this camelcase (rottenFruit).
//The returned array should be in lowercase.


const removeRotten = bagOfFruit => 

bagOfFruit ? bagOfFruit.map(rotFruit => rotFruit.slice(0,6) === 'rotten'
                            ? rotFruit.slice(6).toLowerCase()
                           : rotFruit) : []

//console.log(removeRotten(['apple', 'rottenBanana', 'mango', 'rottenPineapple', 'peach']))
  