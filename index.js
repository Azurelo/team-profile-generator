const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const renderTeam = require("./src/page-template.js")

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamArray = [];
const idArray = [];

console.log(`This is a team generator. \n use "npm run reset" to reset the generated html file.
\n Input your team details below`);

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
        inquirer.prompt([
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
    const inqEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's first name?",
                validate: (answer) => {
                    if(answer !== ""){
                        return true;
                    }
                    return "You have to enter a name for the engineer."
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID number",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        if (idArray.includes(answer)){
                            return "This ID is already in use. Enter a new ID."
                        } else {
                            return true;
                        }
                    }
                    return "You have to enter a positive number for the engineer's ID."
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the engineer's GitHub Username",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email"
            }

        ])
        .then((response) => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGitHub
            );
            teamArray.push(engineer);
            idArray.push(response.engineerID);
            makeTeam();
        })
    }
        const inqIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's first name?",
                validate: (answer) => {
                    if(answer !== ""){
                        return true;
                    }
                    return "You have to enter a name for the intern."
                }
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID number",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        if (idArray.includes(answer)){
                            return "This ID is already in use. Enter a new ID."
                        } else {
                            return true;
                        }
                    }
                    return "You have to enter a positive number for the intern's ID."
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email"
            }

        ])
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool
            );
            teamArray.push(intern);
            idArray.push(response.internID);
            makeTeam();
        })
    }
    function createTeam(){
        if(!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, renderTeam(teamArray), 'utf-8')
    };

    makeTeam();
};


appStart();
