import { genInt } from '../utils.js';
import launch from './selectionOfGames.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const genQuestion = () => {
  const randomNumber = genInt(0, 100);
  const question = `Question: ${randomNumber}`;
  let expected;
  if (randomNumber % 2 === 0 && randomNumber !== 2) {
    expected = 'no';
  } else if (randomNumber % 3 === 0 && randomNumber !== 3) {
    expected = 'no';
  } else if (randomNumber % 5 === 0 && randomNumber !== 5) {
    expected = 'no';
  } else if (randomNumber % 7 === 0 && randomNumber !== 7) {
    expected = 'no';
  } else {
    expected = 'yes';
  }
  return [question, expected];
};

export default () => launch(rule, genQuestion);
