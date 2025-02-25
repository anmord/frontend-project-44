import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const genInt = () => { 
  return Math.floor(Math.random() * 100);
}

const askQuestion = (name) => {
  const x = genInt();
  console.log(`Question: ${x}`);
  let correctAnswer;
  const userAnswer = readlineSync.question('Your answer: ');
  if (x % 2 === 0) {
    correctAnswer = 'yes';
  }
  else {
    correctAnswer = 'no';
  }
  if (correctAnswer === userAnswer) {
    console.log("Correct!");
    return true;
  } 
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

const parityCheck = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i++) {
    if (!askQuestion(name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

parityCheck();
