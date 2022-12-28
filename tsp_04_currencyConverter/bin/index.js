#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import inquirerPrompt from "inquirer-autocomplete-prompt";
import figlet from "figlet";
import chalk from "chalk";
import fuzzy from "fuzzy";
import { getApi, getRateConverter } from "./apis/getApi.js";
inquirer.registerPrompt("autocomplete", inquirerPrompt);
function validateNumber(input) {
    if (isNaN(input)) {
        return "Invalid Number!";
    }
    else {
        return true;
    }
}
console.clear();
const CURRENCY_LIST_URL = "https://api.apilayer.com/exchangerates_data/symbols";
// function to get api results
let message = "Currency Convertor";
let poweredBy = "by RRS";
console.log(chalk.blue(figlet.textSync(`< ${message} > \n ${poweredBy}`, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
const currency_code = await getApi(CURRENCY_LIST_URL);
function searchCurrency(answers, input = "") {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fuzzy.filter(input, currency_code).map((el) => el.original));
        }, Math.random() * 470 + 30);
    });
}
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
        message: "Please add your Task",
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
        default: "USD",
        validate(val) {
            return val ? true : "Type something!";
        },
        source: searchCurrency,
    },
]);
// console.log(fromCurrency.from_currency);
const result = await getRateConverter(toCurrency.to_currency, fromCurrency.from_currency, currencyAmount);
console.log(result);
// declaring type for each object of array
// type List = string;
// let todoList: List[] = ["task 1", "task 2"];
// let doneList: List[] = [];
// // declaring array with the type mention above
// let checkConfirm: boolean = false;
// do {
// 	console.log("\n \n");
// 	const choice = await inquirer.prompt([
// 		{
// 			type: "list",
// 			choices: ["View List", "Add Task", "Remove Task", "Mark Task"],
// 			name: "functions",
// 			message: "Choose operation",
// 		},
// 	]);
// 	switch (choice.functions) {
// 		case "View List":
// 			console.log(chalk.bold.yellow("\n \n Your Todo list\n"));
// 			console.table(todoList);
// 			console.log(chalk.bold.green("\n \n Done Task list\n"));
// 			console.table(doneList);
// 			break;
// 		case "Add Task":
// 			const addTaskList = await inquirer.prompt([
// 				{
// 					type: "input",
// 					name: "task",
// 					message: "Please add your Task",
// 				},
// 			]);
// 			todoList.push(addTaskList.task);
// 			break;
// 		case "Remove Task":
// 			const removeTaskList = await inquirer.prompt([
// 				{
// 					type: "list",
// 					choices: todoList,
// 					name: "task",
// 					message: "Choose Task",
// 				},
// 			]);
// 			let index = todoList.indexOf(removeTaskList.task);
// 			todoList.splice(index, 1);
// 			break;
// 		case "Mark Task":
// 			const markTaskList = await inquirer.prompt([
// 				{
// 					type: "list",
// 					choices: todoList,
// 					name: "task",
// 					message: "Choose Task",
// 				},
// 			]);
// 			let value = todoList.indexOf(markTaskList.task);
// 			todoList.splice(value, 1);
// 			doneList.push(markTaskList.task);
// 			break;
// 		default:
// 			break;
// 	}
// 	const isConfirm = await inquirer.prompt([
// 		{
// 			name: "confirm",
// 			type: "confirm",
// 			message: "Do you want to try again",
// 		},
// 	]);
// 	checkConfirm = isConfirm.confirm;
// 	if (!checkConfirm) {
// 		console.log(chalk.bold.yellow("\n \n Your Todo list\n"));
// 		console.table(todoList);
// 		console.log(chalk.bold.green("\n \n Done Task list\n"));
// 		console.table(doneList);
// 		console.log(
// 			chalk.yellow("\n \n Thank you for Choosing Our TODO List services"),
// 		);
// 	}
// } while (checkConfirm);
