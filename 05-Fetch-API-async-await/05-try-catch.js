/* 
    ! Try...Catch
    A try...catch statement is used to handle errors in JavaScript. It is a syntax that allows you to write code that will run if an error occurs, and code that will run if no error occurs. The reason that I am choosing to cover this now is because it is how we usually handle errors with Async & Await. With the `.then()` syntax, we can use the `.catch()` method, which you could use with Async/Await if you want, but usually to handle errors. With Async & Await, we use a try...catch statement.


    try {
    // Try to execute this code
    } catch (error) {
    // If an error occurs, execute this code
    }
*/

// try {
//     console.log(x);
// } catch (error) {
//     console.log('Error:' + error)
// }


/*
    * For example, if you are making an API request or an HTTP request and you are not sure, if the request will success, you can use a try...catch statement to handle that error if it occurs, and you can do something with that message
*/

// ! We can throw our own errors as well 



function double(number) {
    if (isNaN(number)) {
        throw new Error(number + ' is not a number')
    }
    return number * 2;
}

try {
    const y = double(2);
    console.log(y)
} catch (error) {
    console.log(error)
} finally {
    console.log('This will always run');
}