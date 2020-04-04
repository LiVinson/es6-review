//Run the file to determine what currently logs.
//Convert the following functions to arrow functions where appropriate,
// making sure they the commented answer

function adder(x, y) {
  return x + y
}

console.log(adder(2, 3)) //6

/*---------------------------------------------*/

var multiplier = function (x, y) {
  return x * y
}

console.log(multiplier(3, 4)) //12

/*---------------------------------------------*/
var subtractThree = function (x) {
  return x - 3
}

console.log(subtractThree(10)) //7

/*---------------------------------------------*/

var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club",
  ],
  watchMovie: function () {
    this.queue.pop()
  },
  addMovie: function (movie) {
    this.queue.unshift(movie)
  },
  printQueue: function () {
    var list = ""
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i]
      list += this.queue.length - i + ". " + currentMovie + "\n"
    }
    console.log(list)
  },
}

console.log("Printing movie queue!\n")
netflixQueue.printQueue()
netflixQueue.watchMovie()
console.log("\nWatched a movie!\n")
console.log("Printing movie queue!\n")
netflixQueue.printQueue()
console.log("\nAdding a movie!\n")
netflixQueue.addMovie("Black Swan")
console.log("Printing movie queue!\n")
netflixQueue.printQueue()

/*---------------------------------------------*/

const person = {
  name: "Alex",
  age: 25,
  returnGreeting: function () {
    const greeting = function () {
      console.log(
        `Hi, my name is ${this.name} and I am ${this.age} year's old!`
      )
    }
    greeting()
  },
}

person.returnGreeting() //Hi, my name is Alex and I am 25 year's old!
