// ! Event Bubbling

// * Select elements
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const mainTitle = document.querySelector(".main-title");
const todoNr = document.querySelector(".todo-nr b");

// We get HTML Collection from here. So we can use for...of loop over it. If we have NodeList we can use forEach on it.
const items = todoList.children;

button.addEventListener("click", function (e) {
  const newItem = document.createElement("li");

  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;

  // Attached it to parent
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;

  // * Create the element and attaching the listener.
  newItem.addEventListener("click", deleteItem);
});
// * I want to add EventListener to all the li's.

for (let item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  e.stopPropagation();
  console.log(e.target);
  console.log("Deleted");
  e.target.remove();
}

/* 
    ! Event 
    * When we pass a parameter to the event function, it returns an object.
    * It tell us about what happened. like what type of event is called? and the what its targeting.
    * We can access to that specific item that we click on using e.target.
    ? How can we access these individual items?
    * We learned whenever we clicked on something, 
    * This event gets triggered and we can have access to that on parameter. First parameter we can add is "e" 
    * Which is whatever happen when we click, give us all the information.
    * When you run an event. e.g: newItem.addEventListener("click", deleteItem);
    * The first parameter is gonna be reserved to whatever happens. e.g: e or event
    * You can have access to that element whatever you clicked on using: e.target.
*/

/* 
    ? What is event bubbling?
    * We add an eventListener so we can click on the item. e.g: newItem.addEventListener("click", deleteItem);
    * But what we can also do is add an eventListener on the <ul> on the body/document/window.
*/

// ! Click on the ul and it will fade.
// ! This is what we call EVENT BUBBLING
todoList.addEventListener("click", function (e) {
  todoList.classList.toggle("fade");
});

/*
 * When we click on the item1/2/3/4 the <ul></ul> also executed
 * When click on the <li></li> we are also clicking on other things.
 * When click on <li></li>
 * We are also clicking on the <ul></ul>
 * We are also clicking on the <body></body>
 * We are also clicking on the <Document>
 * We are also clicking on the <Window>
 ! All the clicks are gonna bubble up.
 * We want that when I click on the item1/2/3/4 other clicks may not be executed.
 ! We can stop it from happening.
    * go to li eventListener.
    * and add e.stopPropagation()
        * It's not gonna bubble UP ANYMORE,
        * It's not gonna expand any other click events on the ul/body/document
        * When You click on one element you are clicking on multiple elements on the same time.
 */
