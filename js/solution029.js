//Calculate the mean and median values of the number elements from the input array.

//const input = [12, 46, 32, 64]; return { mean: 38.5, median: 32 }

const input = [12, 46, 32, 64];
  input.sort((a, b) => a - b);

  input
  .reduce((accumulator, currentValue, index, array) => {

    accumulator.mean += currentValue /  array.length;

    if(Math.abs(index + 1  - array.length / 2) < 1) { 
      accumulator.median = currentValue 
    }

    return accumulator;
  }, { mean: 0, median: 0 });

