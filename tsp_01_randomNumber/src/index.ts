/** @format */
import inquirer from "inquirer";

let welcome: string = "Welcome To the Number Guessing Game \n\n\n";
type Guess = {
	guess: number;
};

let checkConfirm: boolean = false;

let result: number = 0;
let attempt: number = 0;

console.log(welcome);

do {
	let round: number = 0;
	attempt += 1;
	const numToGuess: number = Math.floor(Math.random() * 10) + 1;

	function validateNumber(input: number): string | boolean {
		if (isNaN(input)) {
			return "Invalid Number!";
		} else {
			return true;
		}
	}

	do {
		console.log(`Game # ${attempt} - Round # ${round} \n\n`);
		let input: Guess = await inquirer.prompt([
			{
				type: "number",
				name: "guess",
				message: "Enter your Guess",
				validate: validateNumber,
			},
		]);
		const userGuess = Number(input.guess);

		if (userGuess < numToGuess) {
			console.log(`\n Your Guess is smaller \n`);
		} else if (userGuess > numToGuess) {
			console.log(`\n Your Guess is greater \n `);
		} else {
			console.log(`\n Wow! you guessed the number \n`);
			result += 1;
		}

		round += 1;
	} while (round < 3);

	console.log(`Your socre is ${result} / ${attempt} \n\n`);
	console.log(`The Game is Over \n\n\n`);

	const isConfirm = await inquirer.prompt([
		{
			name: "confirm",
			type: "confirm",
			message: "Do you want to try again",
		},
	]);
	checkConfirm = isConfirm.confirm;
} while (checkConfirm);
