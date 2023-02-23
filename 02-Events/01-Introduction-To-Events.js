/*
    ! Events 
    * Something what the user DOES. for example, HOVER, CLICK, Scroll, keyboard keys, Resizing the browser etc
    * Things that happen to our HTML element.
    * We can use JavaScript to react to those events. 
*/

// ! Selector
const button = document.querySelector("#submit");

// ! Event Listener (List to one of those events for example, HOVER, CLICK, Scroll, keyboard keys, Resizing the browser etc)

/* 
    * Now we need to ATTACH an EVENT LISTENER To the Selector
    ? How can we attach obe of these to the button?
    * It takes 2 arguments.
        * 1. First one, is the event you wanna use specify it.
        * 2. Second one, is a function.
*/

/*
 * Here in this we don't specify the function name, cause I cannot use this function multiple times.
 * One time function.
 * That's why we don't give it a name.
 */

// button.addEventListener("click", function () {
//   console.log("New Item");
// });

/* 
    ? What is the reason why we don't use parenthesis in here?
    * Because then it gonna automatically invoke the function.

*/
button.addEventListener("click", addItem);

function addItem() {
  console.log("New Item");
}
