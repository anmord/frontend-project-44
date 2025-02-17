import readlineSync from 'readline-sync'
export const greetings = () => {
	console.log('Welcome to the Brain Games!');
	const nameRequest = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${nameRequest}!`);
}
