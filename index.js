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
