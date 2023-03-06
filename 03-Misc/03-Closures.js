function user() {
  const name = "John";

  // Add another function
  const displayName = function (greet) {
    console.log("Greeting: " + name);
  };

  return displayName;
}

/*
 * Invoke this function.
 * When we invoke this function we are gonna have access to displayName function.
 *
 */
