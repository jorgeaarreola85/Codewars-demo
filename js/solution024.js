//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//take in two words as a string with one space in between
//return first letter of each word in the string connected by a period as a new string. 
// "Jorge Arreola"  would return "J.A"
//write function that takes in string. split then map and then join. dont forget to uppercase

function retInitials(firstAndLast){
    return firstAndLast.split(' ').map(element =>element[0]).join('.').toUpperCase()
}

console.log(retInitials('Jorge Arreola'))