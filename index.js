const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');


const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          message: "Please enter a Title:",
          name: 'title',
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false; 
            }
          }
        },
        {
          type: 'input',
          message:  "What was your motivation for the application?",
          name: 'motivation',
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the reason for creating this application!');
                return false; 
            }
          }
        },
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