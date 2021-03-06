// ! Array are also objects
// * Infact everything other than primitive data types is object in JS

// * Declaration
const arr1 = [];
const arr2 = ["index-0", "index-1", "index-2", "index-3"];

// ! The values inside array can be any of the primitive data types and also objects

// * Accessing values in array
// Syntax:- nameOfArray[index] -> index starts from 0

// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[4]);

// * Similar to objects, you can re assign any index of array
// arr2[3] = "new index-3";
// console.log(arr2);

// * But you can not re assign the array if declared by const
// arr2 = [];

// * length and last index
console.log(arr2.length); // -> returns the size of array which is the number of items in array
console.log(arr2[arr2.length - 1]); // -> returns the value at last index of array. Why -1? Cause indexing starts from 0

// * Looping arrays
// while loop
let i = 0;
while (i < arr2.length) {
  console.log("while loop ", arr2[i]);
  i++;
}

// for loop
for (let j = 0; j < arr2.length; j++) {
  console.log("for loop ", arr2[j]);
}

// forEach loop
arr2.forEach(function (value) {
  console.log("forEach loop ", value);
});

// arr2.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

// for..of loop
for (const value of arr2) {
  console.log("for..of loop ", value);
}
// Here of is a relational operator we mentioned in basics/operators

// ! Remember:- `for..in` loop is to loop over `objects` and `for..of` is to loop over `arrays`

// * Methords on array

// array.push()
// array.pop()
// array.pop()
