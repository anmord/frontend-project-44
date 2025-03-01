import readlineSync from 'readline-sync';
import {greeting, genInt} from '../utils.js';
import {userAnswer, expected} from 'brain-calc.js';

const parityCheck = () => {
  const name = greeting();
  const games = readlineSync.question('What game do you want to play? ');
  if (games === 'brain-calc') {
    console.log('What is the result of the expression?');
    askQuestion();
    outputResponse(userAnswer, expected);
  }
  else if (games === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers');
    askQuestion();
    outputResponse(userAnswer, expected);
  }
  else if (games === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    askQuestion();
    outputResponse(userAnswer, expected);
  }
  else {
    console.log('Game not selected');
  }
}  

const outputResponse = (name) => {
  parityCheck();
  if (userAnswer === expected) {
    console.log("Correct!");
    return true;
  } 
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

const launch = (name) => {
  parityCheck();
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    if (!outputResponse()) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

launch();