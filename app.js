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
