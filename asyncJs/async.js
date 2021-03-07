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

// * To make sure that iNeedResult function runs after result is generated, we have 3 diff ways

// * 1) CallBack
// Its is a function that would be executed after the promise is fullfilled.
// Syntax -> function(error, result);

// Changes to be made in generateResult and iNeedFunction function

// * Biggest disadvantage of this was the callbackHell problem
// functionReturningPromise(
//     functionReturningPromise(
//         functionReturningPromise()
//     )
// )

// * 2) Using .then and .catch with Promises

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
