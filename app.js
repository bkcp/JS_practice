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
