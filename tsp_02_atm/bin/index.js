#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.clear();
console.log(`user id: 112233445566
user pin: 1234
`);
const id = 112233445566;
const pin = 1234;
function validateNumber(input) {
    if (isNaN(input)) {
        return "Invalid Number!";
    }
    else {
        return true;
    }
}
let welcome = "Welcome To the RRS ATM  \n\n\n";
console.log(chalk.blue(figlet.textSync("<<< RRS ATM >>>", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
let checkConfirm = false;
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "user_id",
        message: "Enter your id # : ",
        validate: validateNumber,
    },
    {
        type: "password",
        name: "user_pin",
        message: "Enter your pin # : ",
        mask: "*",
        validate: validateNumber,
    },
]);
const userId = Number(answers.user_id);
const userPin = Number(answers.user_pin);
const date = new Date();
const hour = date.getHours();
let greetings = "";
if (hour <= 10) {
    greetings = "Morning";
}
else if (hour <= 12) {
    greetings = "Noon";
}
else if (hour <= 16) {
    greetings = "Afternoon";
}
else if (hour <= 19) {
    greetings = "Evening";
}
else {
    greetings = "Night";
}
if (userId === id && userPin === pin) {
    answers.user_name = "Human";
    answers.user_balance = Math.floor(Math.random() * 10000);
    do {
        console.log(chalk.bold.yellow(`\n\n Hello ${answers.user_name}, Good ${greetings} \n\n`));
        console.log("");
        const choice = await inquirer.prompt([
            {
                type: "list",
                choices: ["Balance Inquiry", "Transfer Amount", "Withdraw"],
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
                if (answers.user_balance > transfer.amount) {
                    answers.user_balance -= transfer.amount;
                    console.log(chalk.green(`Your current balance : ${answers.user_balance}`));
                }
                else
                    console.log(chalk.red(`Sorry, your balance is insufficent.`));
                break;
            case "Withdraw":
                const withdraw = await inquirer.prompt([
                    {
                        type: "input",
                        name: "amount",
                        message: "Please enter the amount to Withdraw : ",
                    },
                ]);
                if (answers.user_balance > withdraw.amount) {
                    answers.user_balance -= withdraw.amount;
                    console.log(`Your balance: ${chalk.bold.green(answers.user_balance)}`);
                }
                else
                    console.log(chalk.red(`Sorry, your balance is insufficent.`));
                break;
            default:
                break;
        }
        console.log("\n\n\n");
        const isConfirm = await inquirer.prompt([
            {
                name: "confirm",
                type: "confirm",
                message: "Do you want to try again",
            },
        ]);
        checkConfirm = isConfirm.confirm;
        if (!checkConfirm) {
            console.log(chalk.yellow("\n \n Thank you for Choosing Our ATM services"));
        }
    } while (checkConfirm);
}
else
    console.log(chalk.red("\n\n Not authenticated"));
