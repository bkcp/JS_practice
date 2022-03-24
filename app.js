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
