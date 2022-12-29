#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

console.clear();

function wordsCount(str: string): number {
	const arr = str.split(" ");

	return arr.filter((word) => word !== "").length;
}

function characterCount(str: string): number {
	return str.replace(/\s+/g, "").length;
}

const message: string = "Word Counter App";
const poweredBy: string = "by RRS";

console.log(
	chalk.blue(
		figlet.textSync(`< ${message}>\n ${poweredBy}`, {
			font: "Standard",
			horizontalLayout: "default",
			verticalLayout: "default",
			width: 80,
			whitespaceBreak: true,
		}),
	),
);

let checkConfirm: boolean = false;

do {
	const input = await inquirer.prompt([
		{
			name: "text",
			type: "input",
			message: "Please enter a paragraph",
		},
	]);

	console.log(
		chalk.yellow(`\n\nWord Count: ${chalk.bold.green(wordsCount(input.text))}`),
	);
	console.log(
		chalk.yellow(
			`\nCharacter Count: ${chalk.bold.blue(characterCount(input.text))}\n`,
		),
	);
	const isConfirm = await inquirer.prompt([
		{
			name: "confirm",
			type: "confirm",
			message: "Do you want to try again?",
		},
	]);
	checkConfirm = isConfirm.confirm;
	if (!checkConfirm) {
		console.log(
			chalk.cyan(`\n \nThank you for choosing our Word Counting App Service
        
See you!`),
		);
	}
} while (checkConfirm);
