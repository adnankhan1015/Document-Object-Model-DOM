function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// getData("movies.json");
// getData("actors.json");
// getData("directors.json");

getData("./movies.json", (data) => {
  console.log(data);

  getData("./actors.json", (data) => {
    console.log(data);

    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});

// * So you can see the issue here. We have nested 3 callback functions within each other. This is called callback hell. It is not very readable and it can get very messy very quickly. However it does work, it gets the data in the correct order.
