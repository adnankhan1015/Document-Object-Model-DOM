// * AJAX => Asynchronous JavaScript and XML

// ! Synchronous
// console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do something");
// }

// otherFunction();
// console.log("End");

// Javascript read code line by line

/*
 * CallStack
 * A way for JavaScript to keep track of all of your execution context.
 */

// ! Asynchronous

console.log("Start");

function otherFunction() {
  setTimeout(() => {
    // ! Every code we write here will be asynchronous
    console.log("We are in the timeout");
  }, 2000);
}

otherFunction();
console.log("End");

/*
 * SetTimeout => Didn't actually block the code it didn't stop.
 * We have to wait for this one (setTimeout())to finish so we can run the other one.
 * What is happening is JavaScript is very bad at doing multi tasking
 * It's a single threading programming language.
 * We have the browser, cause we are running JavaScript in the browser.
 *
 * There are those things called web API's
 * That can handle separately those things for us.
 * When we call setTimeout()
 * JavaScript (callStack) => pass out this setTimeout.
 * The browser is basically keep track of the time here.
 * and then we continuing running our code.
 */

/*
 * The Asynchronous code get pass to the webApi's
 * So now in callStack, console.log('start'); once its done, its popped off.
 * At the end when the setTimeout() completed its time. It's get pushed back to the callStack from the webApi.
 * When an eventListener is performed, it goes to the webApi
 */
