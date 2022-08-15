//Simple, given a string of words, return the shortest word).
//String will never be empty and you do not need to account for different data types.

//function findShort(s) {
//  let word = s.split(" ");
//  word = word.map((word) => word.length)//.sort();
//  return word[0];
//}

function findShort(str) {
  let words = str.split(" ");
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, words[0]);
  return shortest;
}
console.log(findShort("eye of the tiger")); //
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(
  findShort(
    "Waves ProofOfStake Bitcoin Ripple Monero Steem DarkCoin Dash Lisk LiteCoin Mine BTC Monero"
  )
); //3
