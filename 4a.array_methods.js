/******  Common Array Methods***********/

//ES6 added several helpful array methods: .forEach, map, filter

// ** forEach: Can replace a for loop in majority of instances. It is cleaner and gets rid of counter variables.

//Important notes about forEach:
//Does not return anything.
//Does not automatically change or mutate the array
//Can be passed an anonymous or named function

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

for (let i = 0; i < daysOfWeek.length; i++) {
  //   console.log(daysOfWeek[i])
}

//To convert to a forEach: name_of_array.forEach(func). Function is called on each array element. Can also pass a named function

daysOfWeek.forEach(function (element) {
  //   console.log(element)
})

//Add arrow function

const logStuff = (item, index) => {
  console.log(index, item)
}

//Add named function

//***  */.map() : Used to transform values an array to new values. Returns a new array the same length as the original.
//const new_array = original_array.map(func)

const coolNums = [3, 5, 9, 10]

//Create an array with each element triple the value of the elements in coolNum.

const tripleNums = coolNums.map(function (element) {
  return element * 3
})

//console.log(tripleNums)

//****  */.filter: Used to take original values of array, run a test on them. If result of test is true, array element is added to new array.
//Does not mutate the original array.
//const new_array = original_array.filter(func)

const people = [
  { name: "Bob", age: 30, state: "Florida" },
  { name: "Susan", age: 16, state: "Florida" },
  { name: "Matt", age: 18, state: "Georgia" },
  { name: "Rachel", age: 17, state: "New York" },
]

//Given people array, create a canVote array of those that are able to vote (18+)

//const canVote

//.map and .filter can be chained to gether to both transform and filter the same array.
// Given the people array, create an array of just the names and state of people who are from Florida
