// * Before moving on lets ponder the question...

// ? What are promises in JS?
// * Promises are an assurance that the operation is not completed yet but will
// * complete in future with a possible result or error. In either case promise
// * would stand satisfied.

// * JS handle async using these promises.

// * In JS, promises can be dealt in 3 possible ways:-
// * 1) callback
// * 2) .then, .catch
// * 3) async await
// * All of them do essentially the same thing but some ways
// * are easier to code than others

function idontNeedResult() {
  console.log("I dont need no result.");
}

function iNeedResult(result) {
  console.log("I need result...", result);
}

function generateResult(bool) {
  return new Promise(function (resolve, reject) {
    // Usually this would be function that would take a long time
    setTimeout(() => {
      // Usually this would be decided by the function if it passes or fails
      if (bool === true) {
        resolve("Here is the result");
      } else {
        reject("This is an error message");
      }
    }, 2000);
  });
}

// const result = generateResult(true);
// iNeedResult(result); // as you can see that this function needs result so it must run after the result has been generated
// idontNeedResult();

// * To make sure that iNeedResult function runs after result is generated, we have 3 diff ways

// * 1) CallBack
// Its is a function that would be executed after the promise is fullfilled.
// Syntax -> function(error, result);

// Changes to be made in generateResult and iNeedFunction function
function generateResultCb(bool, callbackFunction) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (bool === true) {
        const result = "Here is the result";
        resolve(result);
        callbackFunction(null, result);
      } else {
        const error = "This is an error message";
        reject(error);
        callbackFunction(error, null);
      }
    }, 2000);
  });
}

function iNeedResultCb(error, result) {
  if (error) {
    console.log("Promise failed...", error);
  } else {
    console.log("I need result...", result);
  }
}

// console.log("Starting...");
// generateResultCb(false, iNeedResultCb); // it didnt block the code from executing
// idontNeedResult();

// * Biggest disadvantage of this was the callbackHell problem
// functionReturningPromise(
//     functionReturningPromise(
//         functionReturningPromise()
//     )
// )

// * 2) Using .then and .catch with Promises
// console.log("Starting...");
// generateResult(false)
//   .then(function (result) {
//     iNeedResult(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// idontNeedResult();

// * Biggest advantage here is that code got cleaned
// * and tacking on more promises got easier
// functionReturningPromise()
// .then(
//     functionReturningPromise()
// )
// .then(
//     functionReturningPromise()
// )
// .catch(() => {})

// * 3) async and await
// ! This is nothing new. It is just syntactical sugar
async function handlePromise() {
  const result = await generateResult(true);
  // all this code after await would run after promise is fullfilled
  iNeedResult(result);
  console.log("blah blah");
}

console.log("Starting...");
handlePromise(); // responsibility of this function to handle everything that needs to be done after promise is fullfilled
idontNeedResult();
