const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual("Lighthouse", "Labs");
assertEqual(8, 8);
assertEqual(8, 10);


const tail = function(second) {
  let newWords = [];
  for (let i = 1; i < second.length; i++) {
    newWords.push(second[i]);
  }
  return newWords;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
assertEqual(words.length, 3);