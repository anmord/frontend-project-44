import { genInt } from '../utils.js';
import launch from './selectionofgames.js';

const rule = 'Find the greatest common divisor of given numbers';

const genQuestion = () => {
  let x = genInt(1, 30);
  let y = genInt(1, 30);
  const question = `Question: ${x} ${y}`;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return [question, x];
};

export default () => launch(rule, genQuestion);
