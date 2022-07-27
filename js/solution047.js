//
//You're writing code to control your town's traffic lights. 
//You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light
//and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow.

//take in string
//return string representing the next color/state of the stop light in sequential order. 
//see examples above
//create object with pairs of property names for each color 
//and its associated value representing the next color

function updateLight(current){
    return({
        green: "yellow",
        yellow: "red",
        red: "green",
    })[current]
}