const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Please select the desired option to add to your team:",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "Stop selection."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "Please enter the manager's name:"
    },

    {
      type: "input",
      name: "managerId",
      message: "Please enter the manager's employee ID number:"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Please enter the manager's email address:"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Please enter the manager's office number:"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name:"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Please enter the engineer's employee ID number:" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email address:"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the engineer's GitHub username:"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

   function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name:"
      },

      {
        type: "input",
        name: "internId",
        message: "Please enter the intern's intern's ID number:" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address:"
      },

      {
        type: "input",
        name: "internSchool",
        message: "Please enter the intern's enroled school name:"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

function htmlBuilder () {
    console.log("Well Done! Team Created Sucessfully!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();