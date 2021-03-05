// * Hello World of JavaScript
console.log("Hello World!");
console.log("Hello World!", "I am new here.");
window.console.log("Hello World!");

// ? What is console?
// * Console provides you the access to your browser's debugging console.
// * It can be found in `window` object
// * Essentially `window.console` is equivalent to console

// * Various methords on console

// error()
console.error("This is an error message.");

// warn()
console.warn("This is a warning.");

// trace()
console.trace("This message will have a stack trace.");
function getTrace() {
  function logOutStack() {
    console.trace("This message will have a stack trace.");
  }
  logOutStack();
}
getTrace();

// table()
console.table(["HTML5", "CSS3", "JavaScript"]);
