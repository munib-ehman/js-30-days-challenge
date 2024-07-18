/* Activity 1: Arithmetic Operation
 Task 1: I am combining task1 -task 5 into a single function. goal is to perform following operation on two numbers
 - add
 - Subtract
 - Multiply
 - divide 
 - find remainder
*/

const arithmeticOperations = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case "+":
      return numberOne + numberTwo;
      break;
    case "*":
      return numberOne * numberTwo;
      break;
    case "/":
      return numberOne / numberTwo;
      break;
    case "%":
      return numberOne % numberTwo;
      break;
    default:
      return 0;
  }
};

console.log(arithmeticOperations(4, 6, "+"));

/* Activity 2: Assignment Operations
Task 6: Use the += operator to add a number in variable and log the result 
*/
for (let i = 0; i + 2; i < 10) {
  let result = 0;
  result += i;
  console.log(result);
}

/*Task 6: Use the -= operator to subtract a number in variable and log the result
 */
for (let i = 0; i < 10; i + 2) {
  let result = 10;
  result -= i;
  console.log(result);
}

/* Activity 3: Comparison Operator 
task 1: write a program to compare two numbers using < and > and log the result
task 2: write a program to compare two numbers using =< and >= and log the result
task 3: write a program to compare two numbers using == and === and log the result
*/

console.log(21 > 20); // false

for (let index = 0; index <= 4; index++) {
  console.log(index);
}
// log 0,1,2,3,4

console.log(2 == "2"); //true;
console.log(2 === "2"); //false;

//  Activity 4: Logical Operator
/*
Task 11: write a program that uses & operator to combine two condition and log the result on console.
Task 12: write a program that uses || operator to combine two condition and log the result on console.
Task 13: write a program that uses ! operator to negate the condition and log the result on console. 
*/
const isTrue = true;
if (isTrue && 2 === 2) {
  console.log("this is using & operator");
}

if (isTrue || 2 === 2) {
  console.log("this is using || operator");
}

let isFalse = false;
if (!isFalse) {
  console.log("this runs on false statement");
}

// Activity 5: Ternary Operator
// Task 1: write a program that uses the ternary operator to check if the number is positive or negative and log the result
let number = -5;
console.log(number < 0 ? "Number is negative" : "Number is positive");
