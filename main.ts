#! /usr/bin/env node 

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { name: "firstNumber", type: "number", message: "Enter Your Fist Number" },
  { name: "SecondNumber", type: "number", message: "Enter Your Second Number" },
  {
    message: "Choose One Operator To Perform Tasks",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Substraction", "Multiplication", "Modulus"],
  },
]);

if (answer.Operators === "Addition") {
  console.log(answer.firstNumber + answer.SecondNumber);
} else if (answer.Operators === "Substraction") {
  console.log(answer.firstNumber - answer.SecondNumber);
} else if (answer.Operators === "Multiplication") {
  console.log(answer.firstNumber * answer.SecondNumber);
} else if (answer.Operators === "Modulus") {
  console.log(answer.firstNumber % answer.SecondNumber);
} else {
  console.log("Please Choose a Valid Operator");
};

