import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const genInt = () => { 
  return Math.floor(Math.random() * 50);
}

const askQuestion = (name) => {
  const x = genInt();
  const y = genInt();
  console.log(`Question: ${x} ${y}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  let max;
  let min;
  let intermediate;
  let expected;
  let a;
  if (x >= y) {
    max = x;
    min = y;
  }
  else {
    max = y;
    min = x;
  }
  for (let i = min; i <= max; i++) {
    if (max - min === 0) {
      expected = max;
      return expected;
    }
    else {
      intermediate = max - min;
      max = min;
      min = intermediate;
      if (max < min) {
        a = min;
        min = max;
        max = a;
      }
    }
  }
  if (userAnswer === expected) {
    console.log("Correct!");
    return true;
  } 
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

const parityCheck = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers');
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    if (!askQuestion(name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

parityCheck(); 