// ! IIFE => is the Immediately Invoked function Expression

(function hello() {
  console.log("Hello");
})(); // Invoked function

// hello();

// Usually used in libraries. They don't create global variables
// They write inside in function. (function functionName(){})()
// It make sure that, that specific library is not creating any global variables

// This function is the part of the global object
function sum() {
  console.log("Sum");
}
