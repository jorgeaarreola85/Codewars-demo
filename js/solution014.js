//Given an array of integers, return a new array with each value doubled.
let newArray = []

function maps(x){
//square each integer found inside the array and return that new array
let newArray = []
for(let i = 0; i < x.length; i++){
const array =  x[i];
const doubled = array * 2;
newArray.push(doubled);
}
return newArray
}
console.log(maps([3,6,5]))// [6,12,10]
console.log(maps([4,2,3]))// [8,4,6]
console.log(maps([1,7,8]))// [2,14,16]