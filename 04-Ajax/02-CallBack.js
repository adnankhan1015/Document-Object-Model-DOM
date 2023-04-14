/*
 * Callback are not always necessarily asynchronous
 * It's not gonna be asynchronous
 */
const items = [1, 2, 3, 4, 5];
// items.forEach((i) => {
//   console.log(i);
// })

/*
  ? How to get data from a server?
  * There's a problem when we write code synchronously

  ? How much does should we add in the setTimeout?
  * We don't know how much time it would take when we are working with a server or an API.
  ! Cause of this, we cannot get the email in the below Function
  * I am envoking a function and I wanna return the email, but it's not gonna work. 
  ? REASON !
  * The information didn't comeback yet, when we console.log(user)

  ? So, how can we get around from this issue?
  * We cannot run synchronous type code here, because we don't have the data.
  ? So, What we do?
  * We pass a callback function. Callback function is just a function that passed in as a parameter that's gonna run later on, later time.
  ? So, what we do?
  * We pass a callback function in the function.

  * When we pass a callback function in the parameter. Then we need to add a callback function in the function call.

  ! Rather than returning "{userEmail: email}", so I am gonna wrap this in a callback e.g callback({userEmail: email})
  * Now I am passing "{userEmail: email}" this user email as a parameterand this function here is I am calling back. 
*/

console.log('Start')

function logInUser(email, password, callback) {
  setTimeout(()=> {
    callback({userEmail: email})
  }, 1500)
}

function getUserVideos(email, callback) {
  setTimeout(()=> {
    callback(['video1', 'video2', 'video3'])
  }, 1000)
}

function videoDetails(video, callback){
  setTimeout(()=> {
    callback("Title of the Vide")
  },2000)
}

const user = logInUser('john@gmail.com', 12345, (user) => {
  console.log(user);

  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);

    videoDetails(videos[0], (title) => {
      console.log(title);
    })
  })
})
console.log(user)

console.log('END')

/* 
  * We just pass a callback function in here.
  * Once the data comes back
  * setTimeout runs
  * We envoke that callback callback({userEmail: email}) which triggers all our functionalities here.
  * We have access to the user.

*/
