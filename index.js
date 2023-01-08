#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2500);
    });
};
async function Welcome() {
    let karaokeTitle = chalkAnimation.karaoke("Go ahead with Calculator");
    await sleep();
    karaokeTitle.stop();
    console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await Welcome();
async function Questions() {
    const answer = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operator you want to Perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2:",
        }
    ]);
    if (answer.operator == "Addition") {
        console.log(chalk.red(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if (answer.operator == "Subtraction") {
        console.log(chalk.red(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.operator == "Multiplication") {
        console.log(chalk.red(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else if (answer.operator == "Division") {
        console.log(chalk.red(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
}
;
async function startAgain() {
    do {
        await Questions();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do u want to countinue? Press y/n"
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES" || again.restart == "yes");
}
startAgain();
