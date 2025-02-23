import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const nameRequest = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameRequest}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const randomNumberOne = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberTwo = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + Math.ceil(1)));
  const randomNumberThree = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + Math.ceil(1)));
  console.log(`Question: ${randomNumberOne}`);
  const numberUser = readlineSync.question('Your answer: ');
  if ((randomNumberOne % 2 === 0 & numberUser === 'yes') || (randomNumberOne % 2 !== 0 & numberUser === 'no')) {
    console.log('Correct!');
    console.log(`Question: ${randomNumberTwo}`);
    const numberUser = readlineSync.question('Your answer: ');
    if ((randomNumberTwo % 2 === 0 & numberUser === 'yes') || (randomNumberTwo % 2 !== 0 & numberUser === 'no')) {
      console.log('Correct!');
      console.log(`Question: ${randomNumberThree}`);
      const numberUser = readlineSync.question('Your answer: ');
      if ((randomNumberThree % 2 === 0 & numberUser === 'yes') || (randomNumberThree % 2 !== 0 & numberUser === 'no')) {
        console.log('Correct!');
        console.log(`Congratulations, ${nameRequest}!`);
      } else if (randomNumberThree % 2 === 0 & numberUser === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
        console.log(`Let's try again, ${nameRequest}!`);
      } else if (randomNumberThree % 2 !== 0 & numberUser === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
        console.log(`Let's try again, ${nameRequest}!`);
      } else {
        console.log('error');
      }
    } else if (randomNumberTwo % 2 === 0 & numberUser === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      console.log(`Let's try again, ${nameRequest}!`);
    } else if (randomNumberTwo % 2 !== 0 & numberUser === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
      console.log(`Let's try again, ${nameRequest}!`);
    } else {
      console.log('error');
    }
  } else if (randomNumberOne % 2 === 0 & numberUser === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
    console.log(`Let's try again, ${nameRequest}!`);
  } else if (randomNumberOne % 2 !== 0 & numberUser === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
    console.log(`Let's try again, ${nameRequest}!`);
  } else {
    console.log(`${numberUser} is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${nameRequest}!`);
  }
};
parityCheck();
