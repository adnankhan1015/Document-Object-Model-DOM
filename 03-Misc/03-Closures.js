function user() {
  const name = "John";

  // Add another function
  const displayName = function (greet) {
    console.log(greet + name);
  };

  return displayName;
}

const say = user();
console.log(say);
say("Hello, How are you?");

/*
 * Invoke this function.
 * When we invoke this function we are gonna have access to displayName function.
 * I am gonna invoke this function by creating a variable. const name = "John"; and it's gonna return this displayName function
 */

/*
 * When we console log the say variable console.log(say); It returns the greeting function => ƒ (greet) {
    console.log(greet + name);
  }
  * if I do say('Hello, how are you?') it returns Hello, How are you?John

  ! This is weird, Its weird how the call stack works
  * When the function is finished it gets pop off the stack. So we don't care it about anymore.
  * In this case say.user();
    * When we invoke this function this user function runs.
    * It create the name.
    * This function returns the function (inside function) and then its done. 
    * The user function gets pop off the stack 
    * In theory, we would not have access to this name anymore, and here the code is finished. 
    * The user function is done running
 */
// say.user();

/* 
  ! say('Hello, how are you?');
  * So when we actually invoke the inner function
  * It shouldn't have access to this const name = 'John';
  * It's outside of the displayName function, and that's what Closure is.
*/

/*
  ! Closure
  * When you have function that has an inner function even though this outer function gets finish running.
  * This inner function will have access to all the variables of the outside function.
  ! OutSide Function
  * The outer function is finish running we will have access to this name variable inside the inner function.
*/
