/* 
  ! Promises
  * Just an object give us back either a result of asynchronous operation or a failure of asynchronous operation, as we do in callback
  * const promise = new Promise()
    * Promise() => This is gonna be an object. A constructor function. This takes 2 arguments. e.g => onSuccess, onFailure
    * Two keywords that the promises uses is resolve(onSuccess) and reject(onFailure).
*/

// ! Creation of a PROMISE
const promise = new Promise((resolve, reject) => {
  console.log('Got in Promise');
  setTimeout(() => {
    // resolve({user: 'John'});
    reject( new Error('User is not logged in'));
  }, 2000)
})
// .then((user)=> {
//   console.log(user)
// }).catch(err => console.log(err.message))

/*
  * Another step is to consume it, execute the code, when we try to get the information back.
  ! Consime the promise
  * .then() => give us back the result but we can also chain.

*/

promise.then((user)=> {
  console.log(user)
}).catch(err => console.log(err.message))


function logInUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('We are in setTimeout')
      resolve({userEmail: email})
    }, 3000)
  })
}

logInUser('john@gmail.com', '1234').then(user => {
  console.log(user)
})