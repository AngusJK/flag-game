const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const flags = require('./flags');

let keys = Object.keys(flags);

rl.question("Welcome to Guess The Flag. In this game you will be shown ten(10) country flags and you must correctly identify them. Type 'play' to continue.\n", (answer1) => {
  if (answer1 === "play") {
    let numOfGuesses = 0;
    let numOfCorrectGuesses = 0;
    const poseQuestion = function() {
      let index = Math.floor(Math.random() * 35);
      let randomCountryName = keys[index];
      let randomFlag = flags[`${randomCountryName}`]["flag"];
      let option1 = flags[keys[Math.floor(Math.random() * 35)]]["name"];
      let option2 = flags[keys[Math.floor(Math.random() * 35)]]["name"];
      let option3 = flags[keys[Math.floor(Math.random() * 35)]]["name"];
      let option4 = flags[keys[Math.floor(Math.random() * 35)]]["name"];
      let num = Math.floor(Math.random() * 3 + 1);
      let correctNumber = num;
      let answerNumber = function() {
        if (num === 1) {
          option1 = flags[`${randomCountryName}`]["name"];
        } else if (num === 2) {
          option2 = flags[`${randomCountryName}`]["name"];
        } else if (num === 3) {
          option3 = flags[`${randomCountryName}`]["name"];
        } else if (num === 4) {
          option4 = flags[`${randomCountryName}`]["name"];
        }
      }
      answerNumber(num);
      let multipleChoice = `  1. ${option1}\n  2. ${option2}\n  3. ${option3}\n  4. ${option4}\n`;
      rl.question(`${numOfGuesses + 1}. What country has this flag?: ${randomFlag}\n${multipleChoice}`, (answer2) => {
        let guess = Number(answer2);
        //let guess = answer2.toLowerCase().trim().replace(/\s+/g, "");
        if (guess === correctNumber) {
          numOfCorrectGuesses += 1;
          numOfGuesses += 1;
          console.log(`✅ Correct!`);
        } else {
          numOfGuesses += 1;
          console.log(`❌ Wrong! The answer is ${flags[randomCountryName]["name"]}.`);
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
    console.log(`You didn't press play. Guess you don't love me then.`);
    rl.close();
  }
});