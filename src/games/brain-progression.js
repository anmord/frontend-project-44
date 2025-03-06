import { genInt } from '../utils.js';
import launch from './selectionOfGames.js';

const rule = 'What number is missing in the progression?';

const genQuestion = () => {
  const sequenceLength = genInt(5, 10);
  const sequenceStep = genInt(2, 4);
  const sequenceOfNumbers = [];
  const firstNumber = genInt(0, 20);
  const unknownNumber = genInt(0, sequenceLength - 1);
  sequenceOfNumbers.push(firstNumber);
  for (let i = 0; i < (sequenceLength - 1); i += 1) {
    sequenceOfNumbers.push(Number(sequenceOfNumbers[i]) + sequenceStep);
  }
  const expected = sequenceOfNumbers[unknownNumber];
  sequenceOfNumbers[unknownNumber] = '..';
  const question = `Question: ${sequenceOfNumbers.join(' ')}`;
  return [question, expected];
};

export default () => launch(rule, genQuestion);
