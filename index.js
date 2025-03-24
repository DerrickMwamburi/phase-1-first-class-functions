// receivesAFunction should take a callback and call it
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction should return a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction should return an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }


