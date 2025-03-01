import readlineSync from 'readline-sync';
import {greeting, genInt} from '../utils.js';

const signs = ['+', '-', '*'];

const solve = (sign, a, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log("Unknown operator :(");
  }
}

export const askQuestion = (name) => {
  const x = genInt();
  const y = genInt();
  const sign = signs[genInt(signs.length)];
  console.log(`Question: ${x} ${sign} ${y}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const expected = solve(sign, x, y);
}

