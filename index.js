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
  azerbaijan: '🇦🇿'};


rl.question("Welcome to Guess The Flag. In this game you will be shown the flag of a country and you must correctly identify it. Type 'play' to continue.", (answer) => {
  if(answer === "play") {
    const poseQuestion = function() {
      Math.floor(Math.random() * 9) + 1;
      
    }
  }
}
)