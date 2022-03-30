console.log("eat me");

let synth = "NerdSeq";

if (synth === "NerdSeq") {
  console.log(`Damn thats a nice ${synth}`);
}

let notes = ["C", "D", "E", "F", "G"];

notes[5] = "fuck";
console.log(notes[5]);
console.log(notes.length);

notes.unshift("z");

if (notes.includes("C")) {
  console.log("yeah its here");
} else {
  console.log("not here");
}

if (notes.indexOf("Bmaj7") === -1) {
  console.log("that isn't included");
}
console.log(notes);

const kitchenSink = {
  favNum: 90,
  isFunny: true,
  colors: ["red", "orange"],
  name: "billy",
};

let objectData = kitchenSink["colors"] + kitchenSink["name"];
console.log(kitchenSink.favNum);
console.log(kitchenSink["isFunny"]);
console.log(objectData);

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i].toUpperCase());
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
for (let i = 1; i < 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`   j is: ${j}`);
  }
}

const seatingChart = [
  ["bill", "biv", "devo"],
  ["jim", "jay", "jack"],
  ["tom", "tim", "tina"],
];

for (let i = 0; i < seatingChart.length; i++) {
  let row = seatingChart[i];
  console.log(`Row #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

const arp = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [3, 5, 7, 2],
  [4, 6, 8, 3],
];

for (let i = 0; i < arp.length; i++) {
  let chordDegree = arp[i];
  console.log(`7th Chord from degree ${i + 1}`);
  for (let j = 0; j < chordDegree.length; j++) {
    console.log(chordDegree[j]);
  }
}

let colors = [
  ["red", "yellow", "orange"],
  ["blue", "green", "purple"],
  ["neon", "earth", "translucent"],
];

for (let i = 0; i < colors.length; i++) {
  let hue = colors[i];
  console.log(`Hue set: ${i + 1}`);
  for (let j = 0; j < hue.length; j++) {
    console.log(hue[j]);
  }
}

let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

const SECRET = "BabyHippo";

// let guess = prompt("enter secret code");

// while (guess !== SECRET) {
//   guess = prompt("enter secret code!..");
// }
console.log("congrats");

// let input = prompt("Hey say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") {
//     break;
//   }
// }
// console.log("Ok you win");

// let maximum = parseInt(prompt("enter max number"));
// while (!maximum) {
//   maximum = parseInt(prompt("a NUMBER dumbass"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("enter a guess"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("too high");
//   } else {
//     guess = prompt("too low");
//   }
// }
// if (guess === "q") {
//   console.log("ok fine quit.");
// } else {
//   console.log(`Nice! it took ${attempts} attempts`);
// }

const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/${subreddits[i]}`);
}

for (let subs of subreddits) {
  console.log(subs);
}

const seating = [
  ["bill", "biv", "devo"],
  ["jim", "jay", "jack"],
  ["tom", "tim", "tina"],
];
let rowNumber = 0;
for (let row of seating) {
  rowNumber++;
  console.log(`Row # ${rowNumber}`);
  for (let student of row) {
    console.log(student);
  }
}

for (let char of "hello world") {
  console.log(char);
}

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 78,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);

for (let points of scores) {
  total += points;
}
console.log(`Class average is ${total / scores.length}`);

const toyCost = {
  heman: 8,
  donatello: 5,
  skelator: 8,
  michaelangelo: 12,
  splinter: 20,
  shredder: 34,
  battlecat: 23,
};

let cost = Object.values(toyCost);
let totals = 0;

for (let prices of cost) {
  totals += prices;
}
console.log(`The average toy cost is ${Math.floor(totals / cost.length)}`);

// /*TODO APP
//   -prompt "What would you like to do"
//   -type "new"
//   -prompt "Enter new to do"
//   - type '*something to do*'
//   -add new to do item to list
//   -console.log "item added to list"
//   -return to prompt "What would you like to do?"
//   -type "list"
//   - console.log asterisks > array list including index > asterisks
//   -return to prompt "What would you like to do?"
//   -type 'delete'
//   -prompt "enter index of item to delete"
//   - type the index
//   -return to prompt "What would you like to do?"
//   -type "quit"
//   -quit app

//   keywords:
//  new
//  list
//  delete
//  quit

//  anything else returns prompt"wtf? idk what you want..'

//  -USE a while loop, while it isnt "quit", keep looping.
//  -Store the list in an array,
//  -if input = "new" input gets pushed to array.
//  -if input is list, iterate over array and console log.
//  - use splice to delete.
//  */

// let todoList = [];
// let input;
// while (input !== "quit") {
//   input = prompt("what would you like to do?");
//   if (input === "quit") {
//     break;
//   } else if (input === "new") {
//     const newToDo = prompt("Enter new todo");
//     todoList.push(newToDo);
//     console.log(`Added ${newToDo} to list`);
//   } else if (input === "list") {
//     console.log("*****");
//     for (let i = 0; i < todoList.length; i++) {
//       console.log(`${i}: ${todoList[i]}`);
//     }
//     console.log("*****");
//   } else if (input === "delete") {
//     const index = parseInt(prompt("select the index you want to delete"));
//     if (!Number.isNaN(index)) {
//       const deleted = todoList.splice(index, 1);
//       console.log(`Ok, deleted ${deleted}`);
//     } else {
//       console.log("unknown index");
//     }
//   }

//FUNCTIONS and Scope
function greet(firstName, lastName) {
  console.log(`hi, ${firstName} ${lastName[0]}.`);
}
greet("brock", "Cooper");

function repeat(str, number) {
  let result = "";
  for (let i = 0; i <= number; i++) {
    result += str;
  }
  console.log(result);
}
repeat("$", 2);

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}

function lastElement(array) {
  if (array.length == 0) {
    return null;
  }
  let endIndex = array.length - 1;
  return array[endIndex];
}
let testArray = [3, 5, 2, 8, 3];
console.log(lastElement(testArray));

function capitalize(str) {
  let firstCap = str[0].toUpperCase();

  let newStr = str.replace(str[0], firstCap);
  return newStr;
}
console.log(capitalize("brock"));

function sumArray(array) {
  let sum = 0;
  for (let each of array) {
    sum += each;
  }
  return sum;
}
let addArray = [1, 2, 3, 4, 5];
console.log(sumArray(addArray));

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  let days = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday",
  };
  return days[num];
}

console.log(`${returnDay(9)}`);

const square = function (x) {
  total = x * x;
  return total;
};
console.log(`${square(2)}`);

function callTwice(func) {
  func();
  func();
}

//HIGHER ORDER FUNCTIONS = functions that can receive functions as arguments or return functions.
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
callTwice(rollDie);

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("congrats, im a good function!");
      console.log("you win 1,0000$");
    };
  } else {
    return function () {
      alert("you will die");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

makeBetweenFunc(5, 10);

function isBetween(num) {
  return num >= 50 && num <= 100;
}
function isBetween2(num) {
  return num <= 50 && num >= 100;
}

const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const cat = {
  name: "blue",
  color: "reddish",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says meow meow meow`);
  },
};

//THIS refers to parent object.
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    return this.eggCount++;
  },
};

//TRY & CATCH, reports error without stopping your code from running
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("please use a string");
  }
}

//CALLBACKS!!!!!

//ARRAY callback functions
const numbers = [1, 2, 3, 4, 5, 6, 7];

// function print(element) {
//   console.log(element);
// }
// numbers.forEach(print);

//FOR EACH CALLBACK
numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by me",
    score: 59,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 100,
  },
];

movies.forEach(function (el) {
  console.log(`${el.title} - ${el.score} /100`);
});

//MAP CALLBACK
const texts = ["hi there", "omg", "i really like you", "thank you "];
const caps = texts.map(function (txt) {
  return txt.toUpperCase();
});

const numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dblNum = numberSet.map(function (num) {
  return num * 2;
});
console.log(dblNum);

const movieTitles = movies.map(function (m) {
  return m.title;
});
const movieScores = movies.map(function (m) {
  return m.score;
});
console.log(movieTitles);
console.log(movieScores);

//ARROW FUNCTIONS

const squareNUM = (x) => {
  return x * x;
};
const addNUM = (x, y) => {
  return x + y;
};

console.log(squareNUM(2));
console.log(addNUM(5, 5));

const rollDICE = () => {
  return Math.floor(Math.random() * 5) + 1;
};
console.log(rollDICE());

//IF only one parameter, parenthesis are optional
const mulTEN = (x) => {
  return x * 10;
};
console.log(mulTEN(10));

const meet = (str) => {
  return "Hey" + " " + str + "!";
};
console.log(meet("billy"));

// IMPLICIT RETURN
//if only one return, dont have to use "return" but instead of curly braces use parenthesis or nothing at all.
const dieRoll = () => Math.floor(Math.random() * 20) + 1;
console.log(dieRoll());

const addition = (a, b) => a + b;
console.log(addition(3, 4));

console.log(
  movies.map(function (m) {
    return `${m.score / 10}`;
  })
);

console.log(movies.map((m) => `${m.score / 10}`));

movies.forEach((m) => console.log(`${m.title} - ${m.score / 10} / 10 `));

const moviesMap = movies.map((m) => `${m.title} - ${m.score / 10}/10`);

const moviesForEach = movies.forEach((m) =>
  console.log(`${m.title.toUpperCase()} - ${m.score / 10}/10`)
);

///TIMEOUT

setTimeout(() => console.log("hello"), 3000);
setTimeout(() => console.log("I am Skynet"), 4000);

//INTERVALS
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

setTimeout(() => clearInterval(3), 6000);

//FILTER
numbers.filter((n) => {
  return n === 4;
});

const bestMovies = movies.filter((m) => m.score > 95);
console.log(`${bestMovies.map((m) => m.title)[0]}`);

//you can stack map after filter.
const goodMovieTitle = movies
  .filter((m) => m.score > 95)
  .map((m) => m.title)[1];
console.log(goodMovieTitle);

const usrNames = [
  "billy bob thorton",
  "jim jefferies",
  "samuel l. jackson",
  "tommy lee",
  "chris pine",
];

const validUserNames = usrNames.filter((n) => n.length < 10);
console.log(validUserNames);

const shitMovies = function (movies) {
  const lowScoreMovies = movies.filter(function (m) {
    return m.score < 80;
  });
  return lowScoreMovies.map(function (m) {
    return m.title;
  });
};
console.log(shitMovies(movies));

//EVERY & SUM Callback: boolean that checks each element against a t/f question

const pets = ["dog", "cat", "bird", "reptile", "mollusk", "marsupial"];

console.log(pets.every((p) => p.length < 2));

pets.every((p) => p[0] === "fish"); //false
pets.every((p) => p.length > 2); //true

pets.some((p) => p === "dog"); //true
pets.some((p) => p.length > 14); //false

//REDUCE CALLBACK; reduces an entire array to a single value depending on our need.

const pricing = [9.99, 199, 39, 4.38, 489.49];

const finalPrice = pricing.reduce((total, price) => {
  return total + price;
});
console.log(finalPrice);

const minPrice = pricing.reduce((min, price) => {
  if (min < price) {
    return min;
  } else {
    return price;
  }
});
console.log(minPrice);

const maxPrice = pricing.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});
console.log(maxPrice);

const bestMovie = movies.reduce((best, movie) => {
  if (best.score > movie.score) {
    return best.score;
  }
  return movie;
});
console.log(bestMovie.title);

//REDUCE can have an initial value to then build upon, it is placed as the second argument
const evens = [2, 4, 6, 8, 10];
evens.reduce((sum, num) => sum + num, 100);
evens.reduce((sum, num) => sum + num, 60);
evens.reduce((sum, num) => sum + num, 86);

//ARROW FUNCTIONS & keyword THIS

const dude = {
  fistName: "Bradley",
  lastName: "Cooper",
  fullName: () => {
    return `${this.fistName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

//DEFAULT PARAM sets a default param inside the argument

function rollaDie(numSides = 20) {
  return Math.floor(Math.random() * numSides) + 1;
}

function helloing(msg = "hello", person = "human") {
  return `${msg}, ${person}!`;
}

//SPREAD unpacks stuff into individual arguments

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(...letters);

//SPREAD can spread an array into another array, combine and copy
const oddNums = [1, 3, 5, 7, 9];
const primeNums = [13, 19, 29, 31];

const allNums = [...oddNums, ...primeNums];

console.log([..."hello"]);

//SPREAD with object literals copy one object into another object

const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  legs: 4,
  family: "Canidae",
};
//IF BOTH HAVE SAME KEYS, THE LAST ONE WILL OVERWRITE THE FIRST!!!!
const catDog = { ...feline, ...canine };
console.log(catDog);

const dataFromForm = {
  email: "klj@kj.com",
  password: "tobias123!",
  username: "tfunke",
};
const updatedData = { ...dataFromForm, id: 234, isAdmin: false };
console.log(updatedData);

//REST like "all the rest of the arguments", creates an array of arguments in a function
//arguments object is an array of arguments that are given in a function
function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}

function raceResults(gold, silver, ...rest) {
  console.log(
    `Gold winner: ${gold}, Sliver winner: ${silver}, and everyone else: ${rest}`
  );
}

//DESTRUCTURING . divids array into individual variables. non destructivly

const highScores = [234, 34543, 345654, 3452, 457457, 2345, 5245];

const [gold, silver, bronze, ...rest] = highScores;
console.log(
  `gold: ${gold}, silver: ${silver}, bronze: ${bronze}, everyone elses score: ${rest}`
);

const player = {
  mail: "lkjlkjkj@ljk.com",
  pswd: "lkjsdfa",
  fName: "Harvey",
  lName: "Daniels",
  born: 1994,
  died: 2043,
  bio: "Harvey Daniels was a good man",
  city: "San Francisco",
  state: "California",
};

const {
  email,
  pswd,
  fName,
  lName,
  born: birthYear,
  died: deathYear,
  bio,
  city,
  state,
  favFood = "cheese",
} = player;
console.log(
  `${fName}, was born in ${birthYear}, and his favorite food is ${favFood}`
);

function theName(player) {
  const { fName, lName } = player;
  return `${fName} ${lName}`;
}

//you can destructure inside the parameter too
function fulName({ fName, lName }) {
  return `${fName} ${lName}`;
}

movies.filter((m) => m.score > 9);
movies.filter(({ score }) => score > 9);

movies.map((m) => {
  return `${m.title} - ${m.score}`;
});
movies.map(({ title, score, year }) => {
  return `${title} - scored: ${score}`;
});
