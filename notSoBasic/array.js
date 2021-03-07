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

const newArr = [1, 2, 3, 4, 5, 6];

// * array.push()
const newLength = newArr.push(7); // adds an element to the back of array
console.log(newArr, newLength);

// * array.pop()
const lastElement = newArr.pop(); // removes the last element in array and returns it
console.log(newArr, lastElement);

// * array.filter()
function filterFunction(value) {
  // this function returns true for values > 0
  return value > 3;
}
const newArr2 = newArr.filter((value, index, array) => filterFunction(value)); // makes a new array of all the elements that passed filterFunction
console.log(newArr2);

// * array.find()
function findFunction(value) {
  return value >= 5;
}
const foundElement = newArr.find((value) => findFunction(value)); // returns the first element that passed filter function || undefined
console.log(foundElement);

// * array.findIndex()
const indexOfElement = newArr.findIndex((value) => findFunction(value)); // returns the index of first element that passed filter function || -1
console.log(indexOfElement);

// * array.includes()
console.log(newArr.includes(5)); // returns true if element is present in array

// * array.map()
const transformFunction = (value) => {
  return value ** 2;
};
const newSquareArray = newArr.map((value) => transformFunction(value)); // returns a new transformed array
console.log(newSquareArray);

// * array.slice()
const shorterArray = newArr.slice(1, 3); // returns a copy of array from start (1st arg) to end (2nd arg)
console.log(shorterArray);

// * array.sort()
const compareFunction = (a, b) => {
  if (a > b) {
    return -1; // a is sorted before b
  } else if (a < b) {
    return 1; // b is sorted before a
  } else {
    return 0; // unchanged
  }
};
newArr.sort((a, b) => compareFunction(a, b)); // sort an array according to compare function hence mutates the array
console.log(newArr);

// * array.reverse()
newArr.reverse(); // reverse the order of array hence mutates the array
console.log(newArr);

// * array.splice()
const start = 1;
const deleteCount = 2; // optional -> if not provided, all element from start to end will be deleted
const newElement = 9; // optional -> if not provided, items would be only be removed
newArr.splice(start, deleteCount, newElement);
// newArr.splice(start, deleteCount, newElement, 10, 11, 15);
console.log(newArr);
