// * Objects

// ? What are object?
// * Objects are a key value store. Where key is string and value can be
// * any primitive data type or object or fucntion etc.

// ? What is key value store?
// * Key value store is a type of data structure where values corresponding
// * to unique key within the structure are stored.

// * Declaration:-
const daysOfWeek = {
  sunday: 1,
  monday: 2,
  tuesday: 3,
  wednesday: 4,
  thursday: 5,
  friday: 6,
  saturday: 7,
};
// console.log(daysOfWeek);
// sunday, monday, tuesday... are keys
// and 1, 2, 3... are values

// * Refrencing values
console.log(daysOfWeek.sunday);

console.log(daysOfWeek["monday"]);

// * Dynamic refrencing
function findDay(str) {
  console.log(daysOfWeek[str]);
}
findDay("thursday");

// ! Remeber that for a given key you can get value easily and not other way around

// * Important discussion
// * Value corresponding to key of an object can be re assigned in all cases.
// * Whereas object can not be re assigned if it is declared by const

// daysOfWeek.friday = "yayy!! Weekends here!";
// console.log(daysOfWeek);

// daysOfWeek = {}; // error

// * Copy an object

// Methord 1
const source = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const target = {
  key4: "value4",
  key5: "value5",
  //   key1: "different value1",
};

const returnedObj = Object.assign(target, source);
console.log(target);
// console.log(returnedObj);

// Methord 2
const source2 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const target2 = {
  ...source2, // spread operator
  key4: "value4",
  key5: "value5",
  key1: "different",
};
console.log(target2);

// * Get all keys of object
const keys = Object.keys(daysOfWeek);
console.log(keys);

// * Get all values of object
const values = Object.values(daysOfWeek);
console.log(values);

// * Iterating on object
Object.keys(daysOfWeek).forEach((day) => {
  console.log(`${day} is ${daysOfWeek[day]} of the week`);
});

for (const day in daysOfWeek) {
  console.log(`${day} is ${daysOfWeek[day]} of the week`);
}
// Here `in` a relational operators we mentioned in basics/operators.js
