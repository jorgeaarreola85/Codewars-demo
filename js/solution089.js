//function conversion(a, b, c) {
//  let sphere = a + b;
//  let cylinder = b * -1;
//
//  if (c >= 000 && c <= 090) {
//    return `${sphere} ${cylinder} ${c + 090}`;
//  } else if (c > 090 || c <= 180) {
//    return `${sphere} ${cylinder} ${c - 090}`;
//  }
//}

//console.log(conversion(1.5, -1.25, 160));

function identifyPairs(sortedNumbers) {
  const result = [];
  for (let i = 0; i < sortedNumbers.length; i++) {
    (newArray = sortedNumbers[0]), sortedNumbers.length - 1;
    result + newArray;
  }
  return result;
}
console.log(identifyPairs([4, 2, 3, 1]));
