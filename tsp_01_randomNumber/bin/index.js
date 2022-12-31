#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
let welcome = "Welcome To the Number Guessing Game \n\n\n";
let checkConfirm = false;
let result = 0;
let attempt = 0;
console.log(chalk.blue(figlet.textSync("< Guessing Game >\n <  By RRS >", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
do {
    let round = 0;
    attempt += 1;
    const numToGuess = Math.floor(Math.random() * 10) + 1;
    function validateNumber(input) {
        if (isNaN(input)) {
            return "Invalid Number!";
        }
        else {
            return true;
        }
    }
    do {
        console.log(`Game # ${attempt} - Round # ${round} \n\n`);
        let input = await inquirer.prompt([
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
        }
        else if (userGuess > numToGuess) {
            console.log(`\n Your Guess is greater \n `);
        }
        else {
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
