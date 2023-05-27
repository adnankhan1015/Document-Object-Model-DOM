const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h1 = document.createElement("h1");
  h1.innerHTML = `<strong>${error}</strong>`;
  document.querySelector("#posts").appendChild(h1);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(showError);
