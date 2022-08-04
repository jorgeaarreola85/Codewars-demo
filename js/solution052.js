//FizzBuzz as a function expression with a ternary

const fizzBuzz = (n) => {
  for (let i = 1; i <= 100; )
    console.log((i++ % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
};
fizzBuzz(69);
