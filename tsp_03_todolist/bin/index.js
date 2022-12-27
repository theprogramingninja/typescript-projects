#! /usr/bin/env node
/** @format */
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
console.clear();
let message = "RRS TODO List";
console.log(chalk.blue(figlet.textSync(`< ${message} >`, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
let todoList = ["task 1", "task 2"];
let doneList = [];
// declaring array with the type mention above
let checkConfirm = false;
do {
    console.log("\n \n");
    const choice = await inquirer.prompt([
        {
            type: "list",
            choices: ["View List", "Add Task", "Remove Task", "Mark Task"],
            name: "functions",
            message: "Choose operation",
        },
    ]);
    switch (choice.functions) {
        case "View List":
            console.log(chalk.bold.yellow("\n \n Your Todo list\n"));
            console.table(todoList);
            console.log(chalk.bold.green("\n \n Done Task list\n"));
            console.table(doneList);
            break;
        case "Add Task":
            const addTaskList = await inquirer.prompt([
                {
                    type: "input",
                    name: "task",
                    message: "Please add your Task",
                },
            ]);
            todoList.push(addTaskList.task);
            break;
        case "Remove Task":
            const removeTaskList = await inquirer.prompt([
                {
                    type: "list",
                    choices: todoList,
                    name: "task",
                    message: "Choose Task",
                },
            ]);
            let index = todoList.indexOf(removeTaskList.task);
            todoList.splice(index, 1);
            break;
        case "Mark Task":
            const markTaskList = await inquirer.prompt([
                {
                    type: "list",
                    choices: todoList,
                    name: "task",
                    message: "Choose Task",
                },
            ]);
            let value = todoList.indexOf(markTaskList.task);
            todoList.splice(value, 1);
            doneList.push(markTaskList.task);
            break;
        default:
            break;
    }
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
console.log(chalk.bold.yellow("\n \n Your Todo list\n"));
console.table(todoList);
console.log(chalk.bold.green("\n \n Done Task list\n"));
console.table(doneList);
console.log("Thank you for using our app");
