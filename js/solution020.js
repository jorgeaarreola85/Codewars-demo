//take in a string of vowels 
//return the number of vowels in the string in integer form 
//example 'atreu' should return 3 
//write fuction using loop and ternary 
function getCount(str) {
    let vowelsCount = 0;
    
    for(let i = 0; i < str.length; i++){
        str[i] === "a"|| str[i] === "e"|| str[i] === "i"|| str[i] === "o"||str[i] === "u" ? vowelsCount+=1 : vowelsCount+=0
    }
    
    return vowelsCount;
  }

 getCount('SethCurry')