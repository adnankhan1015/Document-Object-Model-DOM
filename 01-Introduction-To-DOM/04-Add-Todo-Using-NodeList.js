const collectionItems = document.querySelectorAll(".item");
const todoList = document.querySelector("#todo-list");

// * It actually transfer it into HTML COLLECTIONS. and NOW the Total Li is updated
// ! You can querySelector it and grab it's children from it and that's gonna turn them into HTML COLLECTIONS for YOU.
// ! NodeList Do not update itself but HTML COLLECTIONS DO.
const items = todoList.children;
console.log(items);
// * I add [0] index just to select the first item.
const todoNr = document.querySelector(".todo-nr");

// console.log(">", todoNr);
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

todoNr.innerText = "Total Li: " + items.length;

/* 
    * If we use querySelector it's not gonna update itself anymore. e.g. console.log(collectionItems)
    * When we use querySelector that is not dynamic anymore. 
    * It's static, Once you grab it it's gonna stay there
    * It's not gonna update if we push a new item.
    * querySelector is STATIC
    * 

*/
