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
