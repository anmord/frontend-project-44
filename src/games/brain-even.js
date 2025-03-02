import { genInt } from '../utils.js';
import launch from './selectionofgames.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const genQuestion = () => {
  const randomNumber = genInt();
  const question = `Question: ${randomNumber}`;
  const expected = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, expected];
};

export default () => launch(rule, genQuestion);
