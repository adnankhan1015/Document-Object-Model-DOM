const userEl = document.querySelector("#user");

function fetchUser() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const users = data;
      displayUser(users);
    });
}

function displayUser(users) {
  users.map((user) => {
    userEl.innerHTML += ` 
  <div class="flex border border-white rounded-lg p-4"> 
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.id}  
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.login}
      </p>
    </div>
  </div>`;
  })
}

document.addEventListener('DOMContentLoaded', fetchUser);
