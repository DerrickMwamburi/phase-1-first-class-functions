function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }


  function returnsANamedFunction() {
    function namedFunction() { // Define a named function
      console.log("I am a named function!");
    }
    return namedFunction; // Return the named function
  }



    function returnsAnAnonymousFunction() {
        return function() { // Define an anonymous function
        console.log("I am an anonymous function!");
        };


        