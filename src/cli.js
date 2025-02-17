import readlineSync from 'readline-sync'
export const greetings = () => {
	console.log('Welcome to the Brain Games!');
	const q = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${q}!`);
}
