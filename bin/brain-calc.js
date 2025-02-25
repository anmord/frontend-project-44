import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const signs = ['+', '-', '*'];

const solve = (sign, a, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log("Unknown operator :(");
  }
}

const askQuestion = (name) => {
  const x = genInt();
  const y = genInt();
  const sign = signs[Math.floor(Math.random() * signs.length)];
  console.log(`Question: ${x} ${sign} ${y}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const expected = solve(sign, x, y);
  if (userAnswer === expected) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

const genInt = () => { return Math.floor(Math.random() * 10); }

const parityCheck = () => {
  const name = greeting();
  const numberOfQuestions = 3;
  let askedQuestions = 0;
  console.log('What is the result of the expression?');
  while (askedQuestions < numberOfQuestions) {
    if (askQuestion(name)) {
      askedQuestions++;
    } else {
      break;
    }
  }

  if (askedQuestions == numberOfQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

parityCheck();
