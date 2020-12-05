const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const flags = require('./flags');

let keys = Object.keys(flags);

rl.question("Welcome to Guess The Flag. In this game you will be shown the flag of a country and you must correctly identify it. Type 'play' to continue.\n", (answer1) => {
  if (answer1 === "play") {
    let numOfGuesses = 0;
    let numOfCorrectGuesses = 0;
    const poseQuestion = function() {
      let index = Math.floor(Math.random() * 83);
      let randomCountryName = keys[index];
      let randomFlag = flags[`${randomCountryName}`];
      rl.question(`What country has this flag?: ${randomFlag}\n`, (answer2) => {
        let guess = answer2.toLowerCase().trim().replace(/\s+/g, "");
        if (guess === keys[index]) {
          numOfCorrectGuesses += 1;
          numOfGuesses += 1;
          console.log(`✅ Correct! ${numOfCorrectGuesses} out of ${numOfGuesses}.`);
        } else {
          numOfGuesses += 1;
          console.log(`❌ Wrong! ${numOfCorrectGuesses} out of ${numOfGuesses}.`);
        }
        if (numOfGuesses === 10) {
          console.log(`Game over. Final score: ${numOfCorrectGuesses} correct out of ${numOfGuesses}.`);
          rl.close();
        } else {
          poseQuestion();
        }
      });
    };
    poseQuestion();
  } else if (answer1 !== "play") {
    console.log("Fuck right off then. And don't bother coming back.");
    rl.close();
  }
});