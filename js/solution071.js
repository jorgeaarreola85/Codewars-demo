//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation
//... but who is going to make the most money?
//Build a function that takes in two arguments (salary, bonus).
//Salary will be an integer, and bonus a boolean.
//If bonus is true, the salary should be multiplied by 10.
//If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//Return the total figure the individual will receive as a string prefixed with "£"
//take in an integer and a boolean
//return string

// create function that uses a ternary to compare if true or false and
//return string of salary multiplied by 10 if true and return just the salary as a string if false

function bonusTime(salary, bonus) {
  return bonus ? "£" + salary * 10 : "£" + salary;
}
