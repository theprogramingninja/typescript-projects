#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import inquirerPrompt from "inquirer-autocomplete-prompt";
import figlet from "figlet";
import chalk from "chalk";
import fuzzy from "fuzzy";
import { getApi, getRateConverter } from "./apis/getApi.js";

inquirer.registerPrompt("autocomplete", inquirerPrompt);
let checkConfirm: boolean = false;
function validateNumber(input: any): string | boolean {
	if (isNaN(input)) {
		return "Invalid Number!";
	} else {
		return true;
	}
}

console.clear();

const CURRENCY_LIST_URL: string =
	"https://api.apilayer.com/exchangerates_data/symbols";

const currency_code = await getApi(CURRENCY_LIST_URL);

function searchCurrency(answers: string, input = "") {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fuzzy.filter(input, currency_code).map((el) => el.original));
		}, Math.random() * 470 + 30);
	});
}
// function to get api results

let message: string = "Currency Convertor";
let poweredBy: string = "by RRS";

console.log(
	chalk.blue(
		figlet.textSync(`< ${message} > \n ${poweredBy}`, {
			font: "Standard",
			horizontalLayout: "default",
			verticalLayout: "default",
			width: 80,
			whitespaceBreak: true,
		}),
	),
);

do {
	const fromCurrency = await inquirer.prompt([
		{
			type: "autocomplete",
			choices: currency_code,
			name: "from_currency",
			message: "Choose currency you want to convert",
			default: "USD",
			validate(val) {
				return val ? true : "Type something!";
			},
			source: searchCurrency,
		},
	]);

	const amount = await inquirer.prompt([
		{
			type: "input",
			name: "amount",
			message: "Please enter the Amount you want to convert.",
			validate: validateNumber,
		},
	]);
	const currencyAmount = Number(amount.amount);

	const toCurrency = await inquirer.prompt([
		{
			type: "autocomplete",
			choices: currency_code,
			name: "to_currency",
			message: "Choose currency you want to convert in",
			default: "PKR",
			validate(val) {
				return val ? true : "Type something!";
			},
			source: searchCurrency,
		},
	]);
	const result = await getRateConverter(
		toCurrency.to_currency,
		fromCurrency.from_currency,
		currencyAmount,
	);

	console.log(
		chalk.yellow(`\n\nRate of ${result.query.to}: ${result.info.rate}\n`),
	);
	console.log(
		`${chalk.blue(result.query.amount)} ${chalk.blue(
			result.query.from,
		)}: ${chalk.green(result.result)} ${chalk.green(result.query.to)}\n\n`,
	);

	const isConfirm = await inquirer.prompt([
		{
			name: "confirm",
			type: "confirm",
			message: "Do you want to try again",
		},
	]);
	checkConfirm = isConfirm.confirm;
	if (!checkConfirm) {
		console.log(
			chalk.yellow(
				"\n \n Thank you for Choosing Our Currency Cunversion App services",
			),
		);
	}
} while (checkConfirm);
