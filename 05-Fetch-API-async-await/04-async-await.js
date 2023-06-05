const promise = new Promise(function (resolve, reject) {
    // Do an async task
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});


// promise.then(data => console.log(data))

/*
    ! Async and await
    * When it comes to async and await one thing we have to do is it has to be in a function that is asynchronous

    * 1. One way that we make this asynchronous is simply adding async with the function keyword. what we would do here is just simply set a variable called response, and we would set that to the promise, except we have to use the await here, because promise

    * promise is an asynchronous operation, we have to await on it to be complete. When it is, it will then be put into this(response) variable, and then all we have to do is console.log(response)

*/

async function getPromise() {
    const response = await promise;
    console.log(response)
}

// getPromise()


/* 
    * Now we want to show you how we can use this with FETCH API, which is very similar

*/


async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // Now Remember we need to, there's another promise with the data
    const data = await res.json();
    console.log(data)
}

// Promise consume using dot then in a function scope
// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then(data => console.log(data))
// }

// getUsers()

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Now Remember we need to, there's another promise with the data
    const data = await res.json();
    console.log(data)
}

getPosts()