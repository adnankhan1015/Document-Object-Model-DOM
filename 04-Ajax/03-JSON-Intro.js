
/*
  ! JSON stands for JavaScript object Object Notation.
  * It is a lightweight data-interchange format it is essentially a way of storing data in a simple human-readable format
  * In web development, especially in JavaScript we work with APIs that send and receive data to and from a server. 
  * Several years ago, XML(Exnensible Markup Language) was the standard for sending data, but in more recent years, JSON has become the standard.
  * The reason I want to talk about JSON right now is because we are talking about JavaScript Object literals and the syntax that uses it extremely similar. JSON uses cur.ly braces of key/value pairs

*/ 

/*
    {
      "name": "John",
      "age": 30,
      "city": "New York"
    }

  * The main difference here is that the keys have double quotes around them. These are required and they must be double quotes. As far as the values, strings must be wrapped in double quotes. Numbers and booleans do not.

  * We have methods available to turn JavaScript objects into JSON strings and vice versa.
*/

const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(obj)
// Turn Object into JSON string

const str = JSON.stringify(obj)
console.log(str)
// * {"name":"John","age":30,"city":"New York"}

// Turn JSON string into Object
const obj2 = JSON.parse(str)
console.log(obj2.name)

// JSON Arrays

const jsonArray = [
  {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["cricket", "video game"]
  },
  {
    "name": "Mary",
    "age": 30,
    "city": "New York",
    "hobbies": ["cricket", "video game"]
  },
  {
    "name": "Paul",
    "age": 30,
    "city": "New York",
    "hobbies": ["cricket", "video game"]
  }
]

const arr = JSON.parse(jsonArray)
console.log(arr[0])