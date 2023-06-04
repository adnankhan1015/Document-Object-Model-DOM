// ! API Error Handling


// fetch('http://httpstat.us/200')
//     .then(response => {
//         return response
//     })
//     .then(() => {
//         console.log('Success')
//     })

// 404
// Test with response.ok
// fetch('http://httpstat.us/404')
//     .then(response => {
//         // console.log(response.status)
//         // console.log(response.ok)
//         // console.log(response.statusText)
//         if (!response.ok) {
//             throw new Error('Request Failed')
//         }
//         return response
//     })
//     .then(() => {
//         console.log('Success')
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Check for specific Code
fetch('http://httpstat.us/404')
    .then(response => {
        if (response.status === 404) {
            throw new Error('Not Found')
        } else if (response.status === 500) {
            throw new Error('Server Error')
        } else if (response.status !== 200) {
            throw new Error('Request Failed')
        }
        return response
    })
    .then(() => {
        console.log('Success')
    })
    .catch((error) => {
        console.log(error)
    })

// Catch Runs on a network error. Its not gonna run for a status like 404, 500 or anything like that
// fetch('http://hello123.net')
//     .then(response => {
//         return response
//     })
//     .then(() => {
//         console.log('Success')
//     })
//     .catch((error) => {
//         console.log(error)
//     })