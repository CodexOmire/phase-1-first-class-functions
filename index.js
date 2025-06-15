// 1. Function that takes a callback and calls it
function receivesAFunction(callback) {
  callback(); // call the function passed in
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  // This named function is called sayHello
  function sayHello() {
    console.log("Hello!");
  }
  return sayHello;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  // This is an anonymous function (no name)
  return function () {
    console.log("I'm an anonymous function!");
  };
}
