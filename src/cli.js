export const greetings = () => {
	var qw = require('readline-sync');
	var q = qw.question('May I have your name?');
	console.log('Hi ' + q + '!');
}
