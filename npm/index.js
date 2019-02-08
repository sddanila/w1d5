var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.blue.bold.strikethrough("You are awesome");
console.log(message);