import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const nameRequest = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameRequest}!`);
  console.log('What is the result of the expression?');
  const randomNumberOne = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberTwo = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberThree = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberFour = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberFive = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberSix = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + Math.ceil(1)));
  const signs = ['+', '-', '*'];
  const randomItemOne = signs[Math.floor(Math.random() * signs.length)];
  const randomItemTwo = signs[Math.floor(Math.random() * signs.length)];
  const randomItemThree = signs[Math.floor(Math.random() * signs.length)];
  console.log(`Question: ${randomNumberOne} ${randomItemOne} ${randomNumberTwo}`);
  const numberUser = readlineSync.question('Your answer: ');
  if (randomItemOne === '+') {
    if ((randomNumberOne + randomNumberTwo) === Number(numberUser)) {
      console.log('Correct!');
      console.log(`Question: ${randomNumberThree} ${randomItemTwo} ${randomNumberFour}`);
      const numberUser = readlineSync.question('Your answer: ');
      if (randomItemTwo === '+') {
        if ((randomNumberThree + randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree + randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '-') {
        if ((randomNumberThree - randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}'is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree - randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '*') {
        if ((randomNumberThree * randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree * randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
    } else {
      console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberOne + randomNumberTwo}'`);
      console.log(`Let's try again, ${nameRequest}!`);
    }
  }

  if (randomItemOne === '-') {
    if ((randomNumberOne - randomNumberTwo) === Number(numberUser)) {
      console.log('Correct!');
      console.log(`Question: ${randomNumberThree} ${randomItemTwo} ${randomNumberFour}`);
      const numberUser = readlineSync.question('Your answer: ');
      if (randomItemTwo === '+') {
        if ((randomNumberThree + randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree + randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '-') {
        if ((randomNumberThree - randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree - randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '*') {
        if ((randomNumberThree * randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree * randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
    } else {
      console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberOne - randomNumberTwo}'`);
      console.log(`Let's try again, ${nameRequest}!`);
    }
  }

  if (randomItemOne === '*') {
    if ((randomNumberOne * randomNumberTwo) === Number(numberUser)) {
      console.log('Correct!');
      console.log(`Question: ${randomNumberThree} ${randomItemTwo} ${randomNumberFour}`);
      const numberUser = readlineSync.question('Your answer: ');
      if (randomItemTwo === '+') {
        if ((randomNumberThree + randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree + randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '-') {
        if ((randomNumberThree - randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree - randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
      if (randomItemTwo === '*') {
        if ((randomNumberThree * randomNumberFour) === Number(numberUser)) {
          console.log('Correct!');
          console.log(`Question: ${randomNumberFive} ${randomItemThree} ${randomNumberSix}`);
          const numberUser = readlineSync.question('Your answer: ');
          if (randomItemThree === '+') {
            if ((randomNumberFive + randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive + randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '-') {
            if ((randomNumberFive - randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive - randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
          if (randomItemThree === '*') {
            if ((randomNumberFive * randomNumberSix) === Number(numberUser)) {
              console.log('Correct!');
              console.log(`Congratulations, ${nameRequest}!`);
            } else {
              console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberFive * randomNumberSix}'`);
              console.log(`Let's try again, ${nameRequest}!`);
            }
          }
        } else {
          console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberThree * randomNumberFour}'`);
          console.log(`Let's try again, ${nameRequest}!`);
        }
      }
    } else {
      console.log(`'${numberUser}' is wrong answer ;(. Correct answer was '${randomNumberOne * randomNumberTwo}'`);
      console.log(`Let's try again, ${nameRequest}!`);
    }
  }
};
parityCheck();
