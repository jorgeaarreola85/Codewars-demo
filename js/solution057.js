/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

function removeExclamationMarks(s) {
  return s.split("!").join("");
}
console.log(removeExclamationMarks("How dare you?!")); //How dare you?
//takes in a string
//returns a string w/out exclamation marks
