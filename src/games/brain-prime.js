import { genInt } from '../utils.js';
import launch from './selectionofgames.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const genQuestion = () => {
  let x = genInt(0, 100);
  const question = `Question: ${x}`;
  if (x % 2 === 0 && x !== 2) {
    x = 'no';
  } else if (x % 3 === 0 && x !== 3) {
    x = 'no';
  } else if (x % 5 === 0 && x !== 5) {
    x = 'no';
  } else if (x % 7 === 0 && x !== 7) {
    x = 'no';
  } else {
    x = 'yes';
  }
  return [question, x];
};

export default () => launch(rule, genQuestion);
