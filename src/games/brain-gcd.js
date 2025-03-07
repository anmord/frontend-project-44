import { genInt } from '../utils.js';
import launch from './selectionGames.js';

const rule = 'Find the greatest common divisor of given numbers';

const genQuestion = () => {
  const randomNumberOne = genInt(1, 30);
  const randomNumberTwo = genInt(1, 30);
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  let expected = randomNumberOne;
  let numberTwo = randomNumberTwo;
  while (expected !== numberTwo) {
    if (expected > numberTwo) {
      expected -= numberTwo;
    } else {
      numberTwo -= expected;
    }
  }
  return [question, expected];
};

export default () => launch(rule, genQuestion);
