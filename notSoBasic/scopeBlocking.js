// * In JS, we have 3 keywords to declare a variable:-
// * var, let and const

// ? Whats the difference between var, let and const?
// **** On the bases of re-assignment:-
// * Variables declared with const can not be re-assigned where as
// * those declared by var or let can be re-assigned
// **** On the bases of scope:-
// * const and let are block scoped where as var is global scope
// **** On the bases of number of declaretions:-
// * variable once declared with const and let can not be re-declared, error would be thrown.
// * Re-declaring var variables wont throw an error

// * Example:-

var a = "declared via var";
let b = "declared via let";
const c = "declared via const";
console.table([a, b, c]);

a = "re-assigning var";
b = "re-assigning let";
// c = "re-assigning const";
console.table([a, b, c]);
