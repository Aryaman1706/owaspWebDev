// * In JS, we have 3 keywords to declare a variable:-
// * var, let and const

// ? Whats the difference between var, let and const?
// **** On the bases of re-assignment:-
// * Variables declared with const can not be re-assigned where as
// * those declared by var or let can be re-assigned
// **** On the bases of scope:-
// * const and let are block scoped where as var is global or funciton scoped
// **** On the bases of number of declarations:-
// * variable once declared with const and let can not be re-declared, error would be thrown.
// * Re-declaring var variables wont throw an error

// ? Conclusion?
// * Use const if no re assignment is required and let if variable is to be re assigned.
// * Avoid using var

// * Example:-

// * Re-assignment
var a = "declared via var";
let b = "declared via let";
const c = "declared via const";
console.table([a, b, c]);

a = "re-assigning var";
b = "re-assigning let";
// c = "re-assigning const";
console.table([a, b, c]);

// * Scoping
// Global scoping
var x = "globally defined var";

if (true) {
  let y = "block defined let";
  const z = "block defined const";

  console.log("Inside code block");
  console.table([x, y, z]);
}

console.log("Outside code block");
console.table([x, y, z]);

// Function scoping
function testScoping() {
  var functVar = "function defined var";

  if (true) {
    let functLet = "block defined let inside function";
    const functConst = "block defined const inside function";

    console.log("Inside code block of function");
    console.table([functVar, functLet, functConst]);
  }

  console.log("Outside code block of function");
  console.table([functVar, functLet, functConst]);
}

testScoping();
console.log("Outside function");
console.table([functVar, functLet, functConst]);

// * Redeclaration
var newDefVar = "previous var declaration";
let newDefLet = "previous let declaration";
const newDefConst = "previous const declaration";

var newDefVar = "new var declaration";
let newDefLet = "new let declaration";
const newDefConst = "new const declaration";
