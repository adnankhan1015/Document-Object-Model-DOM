/* 
    ! Async/Await Error Handling
    * 

*/

// This is one way you can handle it with try...catch
const getUsers = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('http://httpstat.us/500')

        if (!response.ok) {
            throw new Error("Request Failed")
        }

        const data = await response.text()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// getUsers()


// ! I am gonna create another function called getPosts


const getPosts = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await fetch('http://httpstat.us/500')

    if (!response.ok) {
        throw new Error("Request Failed")
    }

    const data = await response.text()
    console.log(data)

}

getPosts().catch(error => console.log(error))