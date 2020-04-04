/******Const and Let*******/

//** Pre es6, variables in javascript are defined using the keyword var. These variables are functionally scoped:

var name = "Lisa"

var logName = function () {
  console.log("I can access name here: ", name)
}

//logName()

var logGreeting = function () {
  if (true) {
    var greeting = "hello there"
  }
  console.log("I can access greeting outside the brackets", greeting)
}

//logGreeting()

//**With es6, variables can also be defined using const and let. These are block scoped instead of functionally scoped.
//**The value of a variable defined with let can be redefined, while const cannot.

let day = "Saturday"

//**Variables defined outside of a function (global) can be accessed anywhere
var logDay = function () {
  console.log("I can access the day: ", day)
  day = "Sunday"
  console.log("I can change the day: ", day)
}

//logDay()

//** Let and Const Variables defined within a block (e.g. an if statement, for loop) can only be accessed in that same block
var logWeather = function () {
  if (true) {
    let weather = "Sunny"
  }
  console.log("The weather outside of the if brackets is: ", weather)
}

//logWeather()

var logMonth = function () {
  const month = "April"
  if (true) {
    console.log("the current month is: ", month)
    const nextMonth = "May"
  }
  console.log("The month outside the brackets is", nextMonth)
}

//logMonth()

//**Variables defined with let can be reassigned. Variables defined with const cannot be reassigned.

let favNumber = 3
favNumber = 7
//console.log(favNumber)

const milesTraveled = 20
//milesTraveled = 5
//console.log(milesTraveled)

//**Additional Examples:

for (var y = 0; y < 5; y++) {
  //console.log(y)
}
//console.log(y)

for (let x = 0; x < 5; x++) {
  //console.log(x)
}
//console.log(x)

//** Although a const variable cannot be reassigned to a new value, whatever the variable references can be updated/modified.

const favNumbers = [3, 7, 13]
favNumbers.push(23)
//console.log(favNumbers)

const person = {
  name: "Sarah",
  age: 23,
}

person.name = "Sara"
//console.log(person)
