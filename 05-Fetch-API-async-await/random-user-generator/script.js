/*
    ! Random User Generator Challenge
    * Before we move on to fetch options and making other types of requests, I want to do a mini project using the [Random User API](https://randomuser.me/). We are going to be able to click a button and fetch a random user and put their info on the page including their picture, name, email, phone, location, age and gender. 

*/

/*
    ! Get Elements & Add Event Listener
    * First, we will get the generate button, the user result element and the loader element. Then we will add an event listener to the button.
*/
const generateBtn = document.querySelector("#generate");
const userEl = document.querySelector("#user");
const loadingEl = document.querySelector("#loading");

// * You should see the data in the console. It is an array with a single object. We need to get the object out of the array. We can do that by using [0]:

function fetchUser() {
  showSpinner();
  fetch("https://randomuser.me/api")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Request Failed")
      }
      return res.json()
    })
    .then((data) => {
      hideSpinner();
      const user = data.results[0];
      displayUser(user);
    })
    .catch((error) => {
      hideSpinner();
      console.log(error)
      document.querySelector('#user').innerHTML = `<p class="text-xl text-center text-red-500 mb-5">${error}</p>`
    })
}

function displayUser(user) {
  userEl.innerHTML = `<div class="flex justify-between">
      <div class="flex">
        <img
          class="w-48 h-48 rounded-full mr-8"
          src="${user.picture.large}"
        />
        <div class="space-y-3">
          <p class="text-xl">
            <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
          </p>
          <p class="text-xl">
            <span class="font-bold">Email: </span> ${user.email}
          </p>
          <p class="text-xl">
            <span class="font-bold">Phone: </span> ${user.phone}
          </p>
          <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
          <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
          <p class="text-xl">
            <span class="font-bold">Gender: </span>${user.gender}
          </p>
        </div>
      </div>
    </div>`;
}

/* 
    ! Show Loading Spinner
    * If you want to show the spinner, add a link to the stylesheet in the head tag right above the Tailwind CDN. Then add a function to show and hide the spinner. It is set to display: none in the CSS, so we will just change that to display: block when we want to show it:

*/

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

generateBtn.addEventListener("click", fetchUser);
// document.addEventListener('DOMContentLoaded', getTodos);
