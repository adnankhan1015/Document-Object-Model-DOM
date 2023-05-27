function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData("./movies.json");
const actorsPromise = getData("./actors.json");
const directorsPromise = getData("./directors.json");

// * Instead of chaining multiple then methods, we can use Promise.all() to handle all of the promises at the same time. We will pass in an array of promises and then we can use the then method to handle the response.

Promise.all([moviesPromise, actorsPromise, directorsPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// It's as easy as that. If I wanted to add another promise to the mix, I would just add it to the array.
const moviesPromiseD = getData("./movies.json");
const actorsPromiseD = getData("./actors.json");
const directorsPromiseD = getData("./directors.json");
const dummyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dummy data");
  }, 2000);
});

Promise.all([moviesPromiseD, actorsPromiseD, directorsPromiseD, dummyPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
