/** @format */
import inquirer from "inquirer";

let welcome: string = "Welcome To the RRS ATM  \n\n\n";
type Authentication = {
	user_id: number;
	user_pin: number;
};

let balance: number = Math.random() * 100;
const answers: Authentication = await inquirer.prompt([
	{
		type: "input",
		name: "user_id",
		message: "Enter first number",
		// validate: validateNumber,
	},
	{
		type: "input",
		name: "user_pin",
		message: "Enter second number",
		// validate: validateNumber,
	},
]);
const userId = Number(answers.user_id);
const userPin = Number(answers.user_pin);
