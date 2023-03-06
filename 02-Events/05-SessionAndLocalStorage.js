// ! Local Storage and Session Storage
/* 
    * Session Storage and Local Storage allows you to save things on the browser even after refresh the page.
    ! There is a big difference between the two.
    * The only thing we can pass to the Local Storage is string.
    * When we refresh the page and the items stays there.
    
    ! Session Storage
    * What's the difference between the two.
    * comment out the Session Storage and Local Storage and close the browser and reopen the page.
    * Local Storage still stays
    * But the session storage is not available anymore
    * So when we close the browser, Session Storage get lost.
    * However Local Storage persists after we even close the browser.
    * We have to manually clear it out.
    ? How?
    * localStorage.clear()

    * if you wanna persist the data after the user closes the browser, then use localStorage.
    * and if you don't then you can use sessionStorage
*/

// Local Storage
/* 
    * We want to set multiple things in localStorage. e.g: array, object(key value pairs) want to store
    ! We cannot do that
    ? Why?
    * We are limited to string.
    * We can add/parse it. When we take back that info and making it an array/object (String looking object/array(we parse it into an object/array))
    
    ! Everything we set to localStorage and everything we get from the localStorage is a STRING. e.g console.log(typeof user) 
*/
localStorage.setItem("todo", "Feed The Cat");
localStorage.setItem("user", "John");

// Getting stuff back
const user = localStorage.getItem("user");
console.log(user);
console.log(typeof user);

// sessionStorage.setItem("todoList", "Session for Feeding Cat");

// localStorage.clear();

// Create an array
const todoList = ["feed", "was", "listen to your cat"];

// Pass that array variable into localStorage. todo is the name, and todoList(pass an array)
localStorage.setItem("todo", todoList);

// When we see the browser it's parse into a string.
// ! if we try to retrieve that
const retrieved = localStorage.getItem("todo");
console.log(retrieved);
console.log("todoList", typeof retrieved); // string

/* 
    ! The problem is that, I passed an array and it converted it into a string.
    * So, I want to have the array back instead of a string.
    * Solution: Rather than passing an array to the localStorage value, 
    * User a method when we set the item. and that method JSON.stringify()
    ! JSON.stringify()
    * browser: Kept the array structure rather than let the localStorage parsed it and make it a string with commas.
    * This method help keep the brackets there.
    * When I retrieved the data want to turn it back into an array
*/

localStorage.setItem("todo", JSON.stringify(todoList));

const retrievedData = JSON.parse(localStorage.getItem("todo"));
console.log(retrievedData);
console.log(typeof retrievedData);

/*
 * You are gonna take some kind of an array or object or anything and JSON.stringify() gonna stringify the data.
 * and you gonna turn it into string but keep the structure of the object or an array.
 * When you retrieve it, you gonna parse it into it's original format.
 */

/* 
    ! JSON(JavaScript Object Notation) => Syntax for serialize object and array.
    * Used this when we retrieved back some information from an API.
*/

/*
 * LocalStorage and Session Storage can only store string and you have to use these methods to convert your objects and arrays with JSON.stringify() and when you take back the information you wanna parse it back.
 */
