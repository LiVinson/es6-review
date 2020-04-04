/* ***Template Literals, Rest Parameter, Spread Operator, Destructuring *******/

//**Template literals**:
  // A way to combine strings with the values of variables inside of one set of quotes
  //To use: wrap the expression in backticks (`). Use a dollar sign and curly braces around expressions

const name = "Jo"
const age = 30
const favNumber = 10

const intro = "Hello, my name is " + name + " and I am " + age + " year's old. 
//console.log(intro)

    //Add TL with name and age

    //Add TL using a function for doubled favNumber

const doubleNum = (x) => x * 2

//Rest Parameters:
  //Takes any parameters passed into a function and collects them into an array.

const adder = (x, y) => x + y

//console.log(adder(1, 2, 3, 4)) //should be 10

function adderRest(...nums) {
  console.log(nums)
  let sum = 0
  for (let index = 0; index < nums.length; index++) {
    sum + nums[index]
  }
  return sum
}

//console.log(adderRest(1, 2, 3, 4)) //10

function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`
}

//console.log(howManyArgs(0, 1))

//**Spread Operator:
  // Allows iterables (objects, array, strings) to be expanded into single elements

let dragons = ["Drogon", "Viserion", "Rhaegal"]
let weapons = ["dragonglass", ...dragons, "wildfire"]

//console.log(weapons)

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
//console.log(clonedObj)


const mergedObj = { ...obj1, ...obj2 }; //overwrites existing properties, adds new
console.log(mergedObj)


//***Destructuring - Objects and Arrays

const sam = {
  username: "Sam",
  birthMonth: "August",
  favColor: "green",
}

function logInfo1(person) {
  console.log(
    `My name is ${person.username}. I was born in  ${person.birthMonth} and\nmy favorite color is ${person.favColor}`
  )
}

//logInfo1(sam)

function logInfo2({ username, birthMonth, favColor }) {
  console.log(
    `My name is ${username}. I was born in  ${birthMonth} and\nmy favorite color is ${favColor}`
  )
}
//logInfo2(sam)

const { username, birthMonth, favColor } = sam

//console.log(username, birthMonth, favColor)

const bestColors = ["red", "orange", "blue"]

const [color1, color2, color3] = bestColors

//console.log(color1, color2, color3)
