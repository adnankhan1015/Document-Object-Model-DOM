// ! Document Object Model (DOM)
/*
 * A way for us to access HTML and CSS through JavaScript.
 */

// ! Selecting THE DOM

const header = document.getElementsByTagName("h2");
console.log(header[0]);
console.log(header);

const list = document.getElementsByClassName("item");
console.log(list[0]);

const button = document.getElementById("submit");
console.log(button);

const headers = document.querySelector("h2");
console.log(headers);

const allHeaders = document.querySelectorAll("h2");
console.log(allHeaders);

const listQuerySelector = document.querySelectorAll(".item");
console.log(listQuerySelector);

const btnQuerySelector = document.querySelector("#submit");
console.log(btnQuerySelector);
