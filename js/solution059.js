//take in a STRING of letters TACG not in any order
//return STRING , (T or A) and (G or C)
//
/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the 
  "instructions" for the development and functioning of living organisms

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function 
receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).  */

function DNAStrand(dna) {
  dna = dna.toLowerCase().split("");
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "a") {
      result += "T";
    } else if (dna[i] === "t") {
      result += "A";
    } else if (dna[i] === "c") {
      result += "G";
    } else if (dna[i] === "g") {
      result += "C";
    }
  }

  return result;
}
console.log(DNAStrand("GTAC")); // CATG
