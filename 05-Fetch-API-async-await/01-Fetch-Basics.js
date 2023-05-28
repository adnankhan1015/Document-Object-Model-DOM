/*
    ! How Fetch Works
    * fetch() is a method that only requires one argument, which is the URL or file path that you want to make the request to. It returns a promise that resolves to a Response object. The Response object contains the response from the server.

    * Let's make a request to get the data in the movies.json file. You know how to handle promises now, so you can use the then method to handle the response.
*/

// fetch("./movies.json").then(function (response) {
//   console.log(response);
// });

/*
    * It is important to note that this does not directly return the data or the JSON response body (in this case, movies) but instead returns a promise that resolves with a Response object with a bunch of properties. It includes stuff like the status of 200, statusText of ok. It has a body property that contains a ReadableStream object. 
    ! To extract the JSON data from the Response object, we return the json() method, which returns a second promise that resolves with the data that we're looking for.

    ! Remember, when we chain then methods, the return value of the first then method is passed as an argument to the second then method. We can call that argument whatever we want, but in this case, we'll call it data.

*/

// ! Using Regular Function
// fetch("./movies.json")
//   .then(function (response) {
//     console.log("Res>>", response);
//     // if (response.ok) {
//     //   console.log("Return JSON Response");
//     // } else {
//     //   console.log("Error");
//     // }
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// ! Using Arrow Function
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

/*
    ! Fetching Text
    * Usually we want to fetch JSON data, but just to show you it is possible, we can fetch plain text. Let's create a file named test.txt and just add some random text in it. We can use the text() method to get the text from the Response object.

*/

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

/*
    ! Fetching Data from an API
    * 

*/

fetch("https://api.github.com/users/adnankhan1015")
  .then((response) => response.json())
  .then((data) => console.log(data));

/*
{
  "login": "adnankhan1015",
  "id": 76393574,
  "node_id": "MDQ6VXNlcjc2MzkzNTc0",
  "avatar_url": "https://avatars.githubusercontent.com/u/76393574?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/adnankhan1015",
  "html_url": "https://github.com/adnankhan1015",
  "followers_url": "https://api.github.com/users/adnankhan1015/followers",
  "following_url": "https://api.github.com/users/adnankhan1015/following{/other_user}",
  "gists_url": "https://api.github.com/users/adnankhan1015/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/adnankhan1015/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/adnankhan1015/subscriptions",
  "organizations_url": "https://api.github.com/users/adnankhan1015/orgs",
  "repos_url": "https://api.github.com/users/adnankhan1015/repos",
  "events_url": "https://api.github.com/users/adnankhan1015/events{/privacy}",
  "received_events_url": "https://api.github.com/users/adnankhan1015/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-12-20T12:13:22Z",
  "updated_at": "2023-04-08T18:07:29Z"
}

*/
