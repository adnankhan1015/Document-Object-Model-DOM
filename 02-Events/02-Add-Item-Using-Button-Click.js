// * Select elements
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const mainTitle = document.querySelector(".main-title");

const items = todoList.children;

const todoNr = document.querySelector(".todo-nr b");

button.addEventListener("click", function (e) {
  const newItem = document.createElement("li");

  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;

  // Attached it to parent
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
});

button.addEventListener("click", function (event) {
  // console.log(mainTitle);
  //   mainTitle.style.color = "red";
  //   mainTitle.style.fontSize = "25px";
  //   mainTitle.classList.add("color");
  mainTitle.classList.toggle("color");
  console.log(event);
});

button.addEventListener("keydown", function (event) {
  if (event.keyCode === 38) {
    mainTitle.classList.add("color");
  }
  if (event.keyCode === 40) {
    mainTitle.classList.remove("color");
  }
});
