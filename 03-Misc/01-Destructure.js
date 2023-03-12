const items = ["banana", "chocolate", "apple", "orange"];

// May be I want to access one of these or 2 of these items

// const apple = items[2];
// const orange = items[3];

// console.log(apple, orange);

// Rather than doing this what we can do is destructure.

// const [banana, chocolate, apple, orange] = items;
/* 
    *Here on the left we save it to the variables. These should not be the exact name of the array
    * On the right we wanna get the items from
    * But with this one line of code I can save everything to a variable
    * We can save it inside a variable
    ? What if we can need only 2?
    * We add 2 and for the other we can add the rest operator. e.g const [banana, chocolate, ...rest] = items;
    * console.log(rest); show the rest of the elements
 */

const [one, two, ...rest] = items;
console.log(rest);
console.log(one);
console.log(two);

// ! Spread Operator
const newItems = [...items, "more Items"];
console.log(newItems);

// ! Objects

const user = {
  name: "John",
  photos: [1, 2, 3, 4],
  age: 22,
  analytics: {
    subscriber: 250,
    videos: 20,
  },
};

// The way we access something we create a variable
const photos = user.photos;
console.log(photos);

// Destructuring
const { name, age } = user;
// With this we can get rid of the dot notation on the left hand side.
// On the right we have the object we want to deconstructing from the user
console.log(name);

const subscriberOfUser = user.analytics.subscriber;
console.log(subscriberOfUser);

const { subscriber } = user.analytics;
// Get me everything from the analytics, Now are inside the analytics here.
console.log(subscriber);
