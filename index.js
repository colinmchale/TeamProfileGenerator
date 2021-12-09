const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 



const managerQuestions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          message: `Please enter the Manager's name:`,
          name: 'name',
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log(`Please enter the Manager's name!`);
                return false; 
            }
          }
        },
        {
          type: 'input',
          message:  `Please enter the Manager's ID#:`,
          name: 'id',
          validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log(`Please enter the Manager's ID!`);
                return false;
            } else {
                return true;
            }
          }
        },


        
        {
            type: 'input',
            message: `Please enter the Manager's office number`,
            name: 'officeNum',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("index.html", data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated")
    });
}

function init() {

    questions()
    // Get the answers from user 
    .then(answers => {
      console.log("answers: " + answers)
        return generateHTML(answers);
    })
    // Use data to display on the ReadMe 
    .then(data => {
      console.log("data: " + data)
        return writeToFile(data);
    })
    // Catch errors
    .catch(err => {
        console.log(err)
    })
  }
  
  // Function call to initialize app
  init();