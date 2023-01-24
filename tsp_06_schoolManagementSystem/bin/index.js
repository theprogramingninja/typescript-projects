import Student from "./class/student.js";
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
let std1 = new Student("rida", 32);
const message = "School Management System";
const poweredBy = "by RRS";
console.log(chalk.blue(figlet.textSync(`< ${message}>\n ${poweredBy}`, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
let checkConfirm = false;
do {
    const choice = await inquirer.prompt([
        {
            type: "list",
            choices: ["View Balance", "Pay Fee", "Student Detail", "View Courses", "Recharge Balance"],
            name: "functions",
            message: "Choose operation",
        },
    ]);
    switch (choice.functions) {
        case "View Balance":
            //dispaly balance in the system
            console.log(std1.viewBalance());
            break;
        case "Pay Fee":
            console.log(std1.payFee());
            break;
        case "Student Detail":
            console.log(std1.showStatus());
            break;
        case "Add New Course":
            console.log(std1.viewCourses());
            break;
        case "Recharge Balance":
            const recharge = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Please enter the amount you want to recharge",
                },
            ]);
            console.log(std1.rechargeBalance(recharge.amount));
        default:
            break;
    }
    const isConfirm = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to try again?",
        },
    ]);
    checkConfirm = isConfirm.confirm;
    if (!checkConfirm) {
        console.log(chalk.cyan(`\n \nThank you for choosing our RRS School Management System
        
See you!`));
    }
} while (checkConfirm);
