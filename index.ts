#! /usr/bin/env node

// 1) Computer will generate a random number - Done
// 2) User input for guesting number - Done
// 3) Compare user input with computer generate number and show result - Done

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You guessed a right number.");
} else {
  console.log("You guessed a wrong number.");
}
