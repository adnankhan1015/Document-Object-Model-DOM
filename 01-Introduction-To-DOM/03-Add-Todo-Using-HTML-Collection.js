const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");

console.log(collectionItems);

// * I add [0] index just to select the first item.
const todoNr = document.getElementsByClassName("todo-nr")[0];
console.log(">", todoNr);
// * Create an li element and add a class to it and add a text.
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 4";

// * Create a Second element
const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 5";
// * Now we need to add it in the parent.
todoList.appendChild(newItem);
todoList.appendChild(anotherItem);
console.log(newItem);

todoNr.innerText = "Total Li: " + collectionItems.length;
