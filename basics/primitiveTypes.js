// ? Printing out is fine but how can we save data?
// * JavaScript has 7 primitive types:-
// string Eg:- "Hello World"
// number Eg:- 15
// bigint Eg:- 1n
// boolean Eg:- true/false
// symbol Eg:- Symbol("signature")
// undefined
// null

// * typeof(arg) returns the primitive type of argument

// * Example Code

// * String
let str = "Hello World";
console.log("Value:- ", str);
console.log("Primitive Type:- ", typeof str);

// * Number
let num = 1;
console.log("Value:- ", num);
console.log("Primitive Type:- ", typeof num);

// * BigInt
// to be used when number > Number.MAX_SAFE_INTEGER
// console.log(Number.MAX_SAFE_INTEGER);
let bigNum = 1n;
console.log("Value:- ", bigNum);
console.log("Primitive Type:- ", typeof bigNum);

// * Boolean
let bool = true;
console.log("Value:- ", bool);
console.log("Primitive Type:- ", typeof bool);

// * Symbol
let sym = Symbol("desc");
console.log("Value:- ", sym);
console.log("Primitive Type:- ", typeof sym);

// * Null
let nothing = null;
console.log("Value:- ", nothing);
console.log("Primitive Type:- ", typeof nothing);

// * Undefined
let iHaveNoIdeaWhatIsHere = undefined;
console.log("Value:- ", iHaveNoIdeaWhatIsHere);
console.log("Primitive Type:- ", typeof iHaveNoIdeaWhatIsHere);

// ? What about complex data
// * Everything other than aforementioned types is an object in js
let obj = {}; // Key-Value pair store
let arr = [];
let newStr = new String("new string"); // constructor function for string data type

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof newStr);

// * Primitive types are not mutable
console.log("Before upper case", str);

str.toUpperCase(); // Simply calling the methord wont change anything
console.log("After upper case", str);

str = str.toUpperCase(); // Until it is reassigned
console.log("After upper case", str);
