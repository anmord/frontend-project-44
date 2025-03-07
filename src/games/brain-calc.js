import { genInt } from '../utils.js';
import launch from './selectionGames.js';

const signs = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const solve = (sign, a, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log('Unknown operator :(');
      return undefined;
  }
};

const genQuestion = () => {
  const randomNumberOne = genInt();
  const randomNumberTwo = genInt();
  const sign = signs[genInt(0, signs.length - 1)];
  const question = `Question: ${randomNumberOne} ${sign} ${randomNumberTwo}`;
  const expected = solve(sign, randomNumberOne, randomNumberTwo);
  return [question, expected];
};

export default () => launch(rule, genQuestion);
