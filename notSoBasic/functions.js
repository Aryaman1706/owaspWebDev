// ? What are functions and what are they used for?
// * Functions are repeatable blocks of code that can be called from within the scope
// * to execute certain code. It is usually used to perform tasks that needs to be
// * performed and various places at various times.

// * Function Declaration
function sayHello() {
  console.log("hello");
}

// * Calling functions
sayHello();

// * Function with arguments
function saySomething(str) {
  console.log("I said ", str);
  //   console.log(`I said ${str}`);
}
saySomething("hello again");

// * Functions with return value
// ! Important -> In JS you can only return one value from a function
function makeRollNo(name, branch, serialNo) {
  let rollNo = `TIET-${branch}-${name}-${serialNo}`;
  //   return branch; // not allowed
  return rollNo;
}
let myRollNo = makeRollNo("aryaman", "ENC", 5);
console.log(`My roll no is:- ${myRollNo}`);
// console.log(`My roll no is:- ${makeRollNo("aryaman", "ENC", 5)}`);

// * Example:-
function modulus(diff) {
  return diff < 0 ? -diff : diff;
}
console.log(modulus(8 - 5));

// * Anonymous Functions
// ? What are anonymous functions?
// * Anonymous functions are the functions that have no name.
// * These functions are defined as expression and are assigned to variable.

// * Defination
let spendMoney = function (inc, exp) {
  if (exp > inc) {
    return "Can not purchase";
  } else {
    return `Remaining money:-  Rs. ${inc - exp}`;
  }
};

// * Calling
console.log(spendMoney(100, 250));

// * Arrow functions
let spendMoney_arrow = (inc, exp) => {
  if (exp > inc) {
    return "Can not purchase";
  } else {
    return `Remaining money:-  Rs. ${inc - exp}`;
  }
};
console.log(spendMoney_arrow(100, 50));
