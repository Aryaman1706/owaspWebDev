// * All operators in JS
// Assignment Operators
// Comparison Operators
// Arthimetic Operators
// Bitwise Operators
// Logical Operators
// String Operators
// Conditional Operators
// Comma Operators
// Unary Operators
// Relational Operators

// * Assigment Operators
let x = 10; // Assignment

// x += 5; // Addition Assignment

// x -= 5; // Substraction Assignment

// x *= 5; // Multiplication Assignment

// x /= 5; // Division Assignment

console.log("Current value of x:- ", x);

// * Comparision Operators
let str1 = "Hello";
let str2 = "hello";

console.log(str1 == str2); // equals

console.log(str1 != str2); // not equal

let num1 = 5;
let num2 = 7;

console.log(num1 > num2); // greater than
console.log(num1 >= num2); // greater than or equal to
console.log(num1 < num2); // less than
console.log(num1 <= num2); // less than or equal to

// * Important
// There is another methord for comparing that is `strictly equal (===)`
// ? What is the differece between == and === ?
// * Strictly equals (===) performs a deeper comparison unlike == which is shallow
let numString = "1";
let num = 1;

// Equals
console.log(numString == num);

// Strictly Equals
console.log(numString === num);

// * Arthimetic Operators
console.log(5 + 6); // addition
console.log(11 - 6); // substraction
console.log(5 * 6); // multiplication
console.log(4 / 2); // division
console.log(5 % 2); // remainder (modulo)
console.log(2 ** 3); // exponent

let a = 5;
a++; // a = a + 1 // increment
// a--; // a = a - 1 // decrement
console.log(a);

// * Logical Operators
// condition1 && condition2 -> returns true only if BOTH condition1 and condition2 are true.
// condition1 || condition2 -> returns true only if ANY condition1 and condition2 are true.
/* !condition1 -> returns the opposite of what condition1 evaluated to */

console.log(true && true);
console.log(true || false);
console.log(!true);

// * String Operators
let strOp1 = "hello";
let strOp2 = "world";

// console.log(strOp1 + " " + strOp2);

// * Quick Aside -> Template strings
let strOpNum = 2;
console.log(`I want ${strOpNum} cheese corn sandwitches.`);

// * Conditional operator
// condition1 ? output1 : output2 -> if condition1 is true then return/execute output1 else output2
let cdOpStr = "helloo";
console.log(cdOpStr === "hello" ? "equal strings" : "unequal strings");
