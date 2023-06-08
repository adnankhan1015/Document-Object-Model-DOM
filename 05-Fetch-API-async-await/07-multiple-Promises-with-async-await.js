function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);
        console.log('xhr', xhr)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error: Something went wrong');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

// getData('./movies.json')
//     .then((movies) => {
//         console.log(movies);
//         return getData('./actors.json');
//     })
//     .then((actors) => {
//         console.log(actors);
//         return getData('./directors.json');
//     })
//     .then((directors) => {
//         console.log(directors);
//     });


async function getAllData() {
    const movies = await getData('./movies.json')
    const actors = await getData('./actors.json')
    const directors = await getData('./directors.json')

    console.log(movies, actors, directors)
    // console.log(123)
}


async function getAllDataWithFetch() {
    const moviesRequest = await fetch('./movies.json');
    const movies = await moviesRequest.json();

    const actorsRequest = await fetch('./actors.json');
    const actors = await actorsRequest.json();

    const directorsRequest = await fetch('./directors.json');
    const directors = await directorsRequest.json();

    console.log(movies, actors, directors)
}

async function getAllDataPromiseAll() {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json'),
    ]);

    const movies = await moviesRes.json()
    const actors = await actorsRes.json()
    const directors = await directorsRes.json()

    console.log(movies, actors, directors)
}

async function getAllDataPromiseAll2() {
    const [movies, actors, directors] = await Promise.all([
        fetch('./movies.json').then((res) => res.json()),
        fetch('./actors.json').then((res) => res.json()),
        fetch('./directors.json').then((res) => res.json()),
    ]);


    console.log(movies, actors, directors)
}


// console.log(123)
getData()
getAllData()
getAllDataWithFetch()
getAllDataPromiseAll()
getAllDataPromiseAll2()
