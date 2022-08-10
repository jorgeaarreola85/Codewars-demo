function duplicateEncode(word){
    let result = '' 
    word = word.toLowerCase()
  for(let i= 0; i<word.length; i++){
    for(let j = i +1; i<word.length; i++){
       if(word[i]=== word[j]) {
           result += ")"
       }else{
           result += "("
       }
}
  }
  return result 
}