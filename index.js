teamArray = [];
//list of requires
const Manager = require("./libr/Manager.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//'libr' as in 'library'
const Engineer = require("./libr/Engineer.js");
const Intern = require("./libr/Intern.js");
const outputDirectory = path.resolve(__dirname, "visuals");
const outputPath = path.join(outputDirectory, "roster.html");
const generateTeam = require("./src/boilerplate.js");

function runGenerator() {
    function createRoster() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Who are you adding to your roster?",
                    name: "addEmployeePrompt",
                    choices: ["Manager", "Intern", "Engineer", "All done!"],
                },
            ])
            .then(function (userInput) {
                switch (userInput.addEmployeePrompt) {
                    case "Manager":
                        addManager();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    case "Engineer":
                        addEngineer();
                        break;

                    default:
                        htmlBuilder();
                }
            });
    }
//separate functions for each type of team member.
    function addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is your manager's name?",
                },

                {
                    type: "input",
                    name: "managerIdNo",
                    message: "Their employee ID #?",
                },

                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is their email address?",
                },

                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "...finally, what is their office number?",
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerIdNo,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamArray.push(manager);
                createRoster();
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your engineer's name?",
                },

                {
                    type: "input",
                    name: "engineerIdNo",
                    message: "What is their employee ID #?",
                },

                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Their email address?",
                },

                {
                    type: "input",
                    name: "engineerGithub",
                    message: "...and their GitHub username?",
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerIdNo,
                    answers.engineerEmail,
                    answers.engineerGithub
                );
                teamArray.push(engineer);
                createRoster();
            });
    }
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is their name?",
                },

                {
                    type: "input",
                    name: "internIdNo",
                    message: "What is their employee ID number?",
                },

                {
                    type: "input",
                    name: "internEmail",
                    message: "...and their email address?",
                },

                {
                    type: "input",
                    name: "internInstitution",
                    message:
                        "What educational institution is your intern currently at?",
                },
            ])
            .then((answers) => {
                const intern = new Intern(
                    answers.internName,
                    answers.internIdNo,
                    answers.internEmail,
                    answers.internInstitution
                );
                teamArray.push(intern);
                createRoster();
            });
    }
    function htmlBuilder() {
        console.log("Success! Your roster has been created. Thank you for using our app!");

        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
    }

    createRoster();
}
//run function
runGenerator();
//you will find your finished team html page in the 'visuals' folder!
