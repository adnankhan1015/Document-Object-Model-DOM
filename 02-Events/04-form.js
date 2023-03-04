const nameInput = document.querySelector(".name-input");
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");

const items = todoList.children;

button.addEventListener("click", function (e) {
  e.preventDefault();
  // Create Element
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);

  todoNr.innerText = items.length;
});
