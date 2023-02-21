const collectionItems = document.getElementsByClassName("item");
// console.log(collectionItems);

const nodeItem = document.querySelectorAll(".item");

console.log(collectionItems, nodeItem);

/* 
    * Everything in DOM is a NODE.
    There are different types of nodes. 1. Elements h1, img, p
    
    ! HTML COLLECTION: HTML COLLECTION can only hold NODE ELEMENTS.

    ! NODE LIST: NODE LIST can hold different types of node.


*/

const nodeItems = document.querySelector("#todo-list");
console.log(nodeItems.childNodes);

const nodeHTMLCollection = document.getElementById("todo-list");
console.log(nodeHTMLCollection.children);

// ? What about Looping?

for (let item of nodeItem) {
  console.log(item);
}

nodeItem.forEach((item) => {
  console.log(item);
});

// ! ForEach is not working for HTML COLLECTION
collectionItems.forEach((item) => {
  console.log(item);
});
