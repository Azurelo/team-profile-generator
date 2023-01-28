const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const pageTemplate = require("./src/page-template.js")

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html;");

const teamArray = [];
const idArray = [];

console.log(`This is a team generator. \n use "npm run reset" to reset the generated html file.
\n Input your team details below`);

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log("You successfully created a README.md file."))
};

function appStart(){
    function makeTeam(){
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "typeMember",
                    message: "Which type of team member do you wish to add?",
                    choices: ["Manager","Engineer","Intern","None"]
                }  
            ])
            .then((response) => {
                switch (response.typeMember){
                    case "Manager": inqManager();
                        break;
                    case "Engineer": inqEngineer();
                        break;
                    case "Intern": inqIntern();
                        break;
                    default: createTeam();
                }
            });
    }
    const inqManager = () => {
        inqManager.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's first name?",
                validate: (answer) => {
                    if(answer !== ""){
                        return true;
                    }
                    return "You have to enter a name for the manager."
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the team manager's ID number",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        if (idArray.includes(answer)){
                            return "This ID is already in use. Enter a new ID."
                        } else {
                            return true;
                        }
                    }
                    return "You have to enter a positive number for the manager's ID."
                }
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the team manager's office number",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true;
                    }
                    return "You have to enter a positive number for the manager's office."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email"
            }

        ])
        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOffice
            );
            teamArray.push(manager);
            idArray.push(response.managerID);
            makeTeam();
        })
    }

    makeTeam();
};


appStart();
