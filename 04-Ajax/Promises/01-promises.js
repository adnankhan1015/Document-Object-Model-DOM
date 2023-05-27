// const promise = new Promise(function (resolve, reject) {
//   // Do an async task
//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// });

// promise.then(function () {
//   console.log("Promise consumed");
// });

const promise = new Promise(function (resolve, reject) {
  // Do an async task
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// promise
//   .then(function (user) {
//     console.log("Promise Consumed", user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

promise
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise has been resolved or rejected"));

console.log("Global console log");
