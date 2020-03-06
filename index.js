const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please give a brief description of your project"
    },
    {
        type: "input",
        name: "Table of Context",
        message: "Please provide a table of context of your project. (If you project does not have a Table of Context, please write 'N/A'."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please describe the installation process"

    },
    {
        type: "input",
        name: "Usage",
        message: "Please describe how to use your application."
    },
    {
        type: "list",
        message: "What type of license used?",
        name: "License",
        choices: [
            "unlicense",
            "lgpl",
            "isc",
            "mit"
        ]

    },
    {
        type: "input",
        name: "contributing",
        message: "please describe how others can contribute to your project or application. (If this does does not apply, please write 'N/A'."
    },
    {
        type: "input",
        name: "test",
        message: "Please explain how to run tests for your applicatoin."
    },
    {
        type: "input",
        name: "questions",
        message: "Please answer possible questions the user might have about your application or project. If this portion does not apply to you please write 'N/A'."
    }

]).then(function(data) {
    const filename = data.name.toLowerCase().splot (' ').joing(' ') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
    })
})

// const questions = [


// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
