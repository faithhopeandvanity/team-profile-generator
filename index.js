const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//'lib' as in 'library'
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

function runApp () {

  function createRoster () {
    inquirer.prompt([{
      type: "list",
      message: "Who are you adding to your roster?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Intern", "Engineer", "All done!"]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Intern":
          addInter();
          break;
        case "Engineer":
          addEngineer();
          break;

        default:
          htmlBuilder();
      }
    })
  }