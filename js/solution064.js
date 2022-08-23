/*Make a program that filters a list of strings and returns a list with only your friends name in it.
 
 If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
 you can be sure he's not... */

//take in a list of strings/array w strings
//return only those strings with 4 letters

function friend(friends) {
  return friends.filter((amigo) => amigo.length === 4);
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); //Ryan, Yous
