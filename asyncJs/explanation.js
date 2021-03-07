// * JavaScript is an asynchronous language.
// * Async refers to the ability to perform multiple opaerations at the same time.

// * Example to diffrentiate between async and sync

// * Lets say there is waiter in a restaurant.
// * There are two ways this waiter can do the job:-

// * 1) Take order from a customer and conveys the order to chef and pick up the order
// * when ready. Meanwhile waiter can serve other customers. This is an async process
// * cause here we are not waiting for one task to finish before taking up other task.

// * 2) Take order from a customer and conveys the order to chef and waits there until
// * the order is ready and then serve the customer. Here in the time when order is
// * is being prepared, waiter is ideal and not doing anything. This is sync process
// * cause here we are waiting for previous task to finish before taking up others.

// * Example:-

// * Quick Aside on setTimeout
// Syntax:- setTimeout(() => { i will run after time ms }, time)
// function inside setTimeout is refered to as callback function. This function is `called` after the timeout

// Sync

// Async

// ? Where do we use async functionality?
// * Mostly while requesting data from API. In this case we want user to interact
// * with website while the data is on its way.

// ? What is API?
// * API stands for Application Programming Interface. It provides a way of communication among diff
// * softwares
// * In web, API is used to talk to the server.

// * Analogy
// * Guests in a wedding function -> Client (Frontend/User side)
// * Cooking area -> Server (Backend)
// * Waiters -> API
