#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow.underline ( '\t \t "welcome to my bmi calculator"\n' ));
const userInput =await inquirer.prompt([
    {
        name : "weight",
        message : "Enter Your Weight In Kg",
        type : "number",

    },
    {
        name : "height",
        message : "Enter Your height In Meters",
        type : "number",

    },
]);

const weight =userInput.weight;
const height = userInput.height;
const BMI =weight / (height * height);
console.log ("according to your height and weight your BMI is:",chalk.bgBlue (BMI));

if (BMI < 18.5){
    console.log (chalk.yellow.underline ("You Are Underweight"));
}else if (BMI < 25){
    console.log (chalk.yellow.underline ("You Are In Normal Categary"));
}else if (BMI <38){
    console.log (chalk.yellow.underline("You Are Overweight"));
}
else {
    console.log (chalk.yellow.underline ("Your Category is Obses"));
}
