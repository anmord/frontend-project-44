import readlineSync from 'readline-sync';
import {greeting, genInt} from '../utils.js';

const askQuestion = (name) => {
  const x = genInt();
  const y = genInt();
  console.log(`Question: ${x} ${y}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const expected = gcdon(x, y);
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

const gcdon = (x, y) => {
  let max = Math.max(x, y);
  let min = Math.min(x, y);
  let intermediate = max - min;
  while (intermediate > 0) {
    if (max - min === 0) {
      return max;
    }
    else {
      intermediate = max - min;
      max = min;
      min = intermediate;
      if (max < min) {
        let a = min;
        min = max;
        max = a;
      }
    }
  }
}

const parityCheck = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers');
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    if (!askQuestion(name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default parityCheck;