import readlineSync from 'readline-sync';
import {greeting, genInt} from '../utils.js';

const parityCheck = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    const randomNumber = genInt();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === userAnswer) {
        console.log("Correct!");
        return;
    } 
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }
  console.log(`Congratulations, ${name}!`);
}

export default parityCheck;