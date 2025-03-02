import readlineSync from 'readline-sync';
import {greeting} from '../utils.js';

export const launch = (rule, genQuestion) => {
  const name = greeting();
  console.log(rule);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    const [question, expected] = genQuestion();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expected.toString() !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    } 
    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
}

