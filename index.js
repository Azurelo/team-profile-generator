const pageTemplate = require("./src/page-template.js")
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html;");

const teamArray = [];

console.log(`This is a team generator. \n use "npm run reset" to reset the generated html file.
\n Input your team details below`);

const managerArray = [
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's first name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?"
    }, 
    {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number"
    }, 
    //Create inquiries that continue to run until none is inputted
    {
        type: "list",
        name: "typeMember",
        message: "Which type of team member do you wish to add?",
        choices: ["Employee","Engineer","Intern","None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project if applicable?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use here."
    },
    {
        type: "input",
        name: "projectImage",
        message: "Add an image to the image folder then enter the image name here."
    },    
    {
        type: "input",
        name: "projectVideo",
        message: "Add a video link to showcase a demo of your project."
    },  
    {
        type: "input",
        name: "tests",
        message: "Provide what tests were implemented for the project's success."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
        //Create a function validation that uses .includes(@something.com) or find an inquirer thing that does

    },
    {
        type: "list",
        name: "license",
        message: "What license is placed on this project?",
        choices: ["Apache","BSD-3","GPL","MIT", "Unlicense", "No License"]
    }];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log("You successfully created a README.md file."))
};
// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(managerArray)
    .then(function(response){
    var myMarkdown = generateMarkdown(response);
    writeToFile(filename, myMarkdown);
    });
};

// Function call to initialize app
init();
