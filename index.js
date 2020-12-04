// this game presents the user with a country flag and asks them to correctly identify it.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const flags = { afghanistan : '🇦🇫', 
  albania: '🇦🇱', 
  algeria: '🇩🇿', 
  angola: '🇦🇴', 
  antiguaandbarbuda: '🇦🇬', 
  argentina: '🇦🇷', 
  armenia: '🇦🇲', 
  australia: '🇦🇺', 
  austria: '🇦🇹', 
  azerbaijan: '🇦🇿'
};

let keys = Object.keys(flags);

rl.question("Welcome to Guess The Flag. In this game you will be shown the flag of a country and you must correctly identify it. Type 'play' to continue.\n", (answer1) => {
  if(answer1 === "play") {
    const poseQuestion = function() {
      let index = Math.floor(Math.random() * 9) + 1;
      let randomCountryName = keys[index];
      let randomFlag = flags[`${randomCountryName}`];
      rl.question(`What country has this flag?: ${randomFlag}\n`, (answer2) => {
        let guess = answer2.toLowerCase().trim().replace(/\s+/g, "");
        if(guess === keys[index]) {
          console.log("Correct!");
          poseQuestion(); 
        } else {
          console.log("Wrong! Game over.")
          rl.close();
        }
      });
    }
    poseQuestion();
  } else if (answer1 !== "play") {
    console.log(keys);
    console.log("Fuck right off then. And don't bother coming back.")
    rl.close();
  }
});