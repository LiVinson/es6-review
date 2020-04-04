/*******Arrow Functions ********/

//Before es6 there were two main ways to create a function: a function declaration and a function expression.

//Function Declaration

function createGreeting1(message, name) {
  return message + ", " + name + "!"
}

//Function Expression

var createGreeting2 = function (message, name) {
  return message + ", " + name + "!"
}

//ES6 adds another way to create function expressions: Arrow Functions

const createGreeting3 = (message, name) => {
  return message + ", " + name + "!"
}

//Arrow functions can be shortened even more if they contain only one expression/statement
//or only one parameter

//***ADD: Shortened arrow function: 1 expression, 1 parameter, no parameter */

/*No matter the type of function, they are all called the same way.

    //**Add function calls */

/*Why arrow functions?
 * Shorter/less syntax then function decalations or expressions
 * The 'this' keyword inside of an arrow function takes on the this of the object it's created inside of
 */

/***Arrow functions inside objects***/

//Don't use arrow functions as object methods, because "this" will not refer to the object (lexical scoping)

var thisTest = {
  whatIsThisArrow: () => console.log("This in an arrow function is", this),
  whatIsThisNoArrow: function () {
    console.log("This in a function declaration is: ", this)
  },
}

// thisTest.whatIsThisArrow()
// thisTest.whatIsThisNoArrow()

//If the object method has a function inside of it, 'this' will still refer to the object in an arrow function

const sample = {
  name: "sample - no arrows",
  outerFunc: function () {
    console.log("in the outer function: ", this.name)
    const innerFunc = function () {
      console.log("in the inner function: ", this.name)
    }
    innerFunc()
  },
}

//sample.outerFunc()

//***Create sample 2 with innerFun as arrow arrow */
