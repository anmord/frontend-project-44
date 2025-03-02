import {genInt} from '../utils.js';
import {launch} from './selectionofgames.js';

const rule = 'Find the greatest common divisor of given numbers';

const genQuestion = () => {
  const randomNumberOne = genInt();
  const randomNumberTwo = genInt();
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`; 
  let max = Math.max(randomNumberOne, randomNumberTwo);
  let min = Math.min(randomNumberOne, randomNumberTwo);
  let intermediate = max - min;
  while (intermediate > 0) {
    if (intermediate !== 0) {
      intermediate = max - min;
      max = min;
      min = intermediate;
      if (max < min) {
        let a = min;
        min = max;
        max = a;
      }
    }
  }
  return [question, max];
}

export default () => launch(rule, genQuestion)