const readline = require('readline');



const listQuestions = ["What's your name? Nicknames are also acceptable :) ", "What's an activity you like doing? ", "What do you listen to while doing that? ", "Which meal is your favourite (eg: dinner, brunch, etc.)? ", "What's your favourite thing to eat for that meal? ", "Which sport is your absolute favourite? ", "What is your superpower? In a few words, tell us what you are amazing at!"];
let userAnswer = [];

const printParagraph = () => {
  console.log(`My name is ${userAnswer[0]}. I like to listen to ${userAnswer[2]} while ${userAnswer[1]}ing. I really enjoy ${userAnswer[4]} in my favourite meal, ${userAnswer[3]}. I love playing ${userAnswer[5]} and my dream superpower is ${userAnswer[6]}`);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const printFollow = async(i) => {
  rl.question(listQuestions[i], (answer) => {
    userAnswer.push(answer);
    console.log(`Answer: ${answer}`);
    if (listQuestions.length - 1 === i) {
      printParagraph();
      rl.close();
      return;
    }
    printFollow(i + 1);
  });
};

printFollow(0);

