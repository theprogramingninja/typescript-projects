/** @format */
import inquirer from "inquirer";

const id: number = 112233445566;
const pin: number = 1234;

let welcome: string = "Welcome To the RRS ATM  \n\n\n";
type Authentication = {
	user_id: number;
	user_pin: number;
	user_name?: string;
	user_balance?: number;
};

let balance: number = Math.random() * 100;
const answers: Authentication = await inquirer.prompt([
	{
		type: "input",
		name: "user_id",
		message: "Enter your id # : ",
		// validate: validateNumber,
	},
	{
		type: "password",
		name: "user_pin",
		message: "Enter your pin # : ",
		// validate: validateNumber,
	},
]);
const userId = Number(answers.user_id);
const userPin = Number(answers.user_pin);

if (userId === id && userPin === pin) {
	answers.user_name = "Rida";
	answers.user_balance = Math.floor(Math.random() * 1000);
	console.log(`Hello ${answers.user_name}:`);
	const choice = await inquirer.prompt([
		{
			type: "list",
			choices: ["Balance Inquiry", "Transfer Amount", "Withdraw,"],
			name: "functions",
			message: "Choose operation",
		},
	]);
	switch (choice.functions) {
		case "Balance Inquiry":
			console.log(`Your current balance is :${answers.user_balance}`);
			break;
		case "Transfer Amount":
			const transfer = await inquirer.prompt([
				{
					type: "input",
					name: "account",
					message: "please enter the account number : ",
				},
				{
					type: "input",
					name: "amount",
					message: "Please enter the amount to transfer : ",
				},
			]);
			console.log(`balance before transfer : ${answers.user_balance}`);
			if (answers.user_balance > transfer.amount) {
				answers.user_balance -= transfer.amount;
				console.log(`Your balance after transfer : ${answers.user_balance}`);
			} else console.log(`Sorry, your balance is insufficent.`);
			break;

		case "Withdraw":
			const withdraw = await inquirer.prompt([
				{
					type: "input",
					name: "amount",
					message: "Please enter the amount to transfer : ",
				},
			]);
			console.log(`balance before transfer : ${answers.user_balance}`);
			if (answers.user_balance > withdraw.amount) {
				answers.user_balance -= withdraw.amount;
				console.log(`Your balance after withdraw : ${answers.user_balance}`);
			} else console.log(`Sorry, your balance is insufficent.`);
			break;

		default:
			break;
	}
} else console.log("Not authenticated");
