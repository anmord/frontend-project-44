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