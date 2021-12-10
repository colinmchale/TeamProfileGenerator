const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamList = [];

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
      message:  `Please enter the Manager's e-mail:`,
      name: 'email',
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log(`Please enter the Manager's e-mail!`);
            return false;
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      message: `Please enter the Manager's office number:`,
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
  .then(managerInput => {
      const  { name, id, email, officeNum } = managerInput; 
      const manager = new Manager (name, id, email, officeNum);
      teamList.push(manager); 
      console.log(manager); 
  })
};

const employeeQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: `Please select the Employee's role:`,
      name: 'role',
      list: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      message: `Please enter the Employee's name:`,
      name: 'name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter the Employee's name!`);
          return false; 
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Employee's ID#:`,
      name: 'id',
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log(`Please enter the Employee's ID!`);
            return false;
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Employee's e-mail:`,
      name: 'email',
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log(`Please enter the Employee's e-mail!`);
            return false;
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Employee's github username:`,
      name: 'github',
      when: (input) => input.role === 'Engineer',
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log(`Please enter the Employee's github username!`);
            return false;
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Intern's school:`,
      name: 'school',
      when: (input) => input.role === 'Intern',
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log(`Please enter the Intern's school!`);
            return false;
        } else {
            return true;
        }
      }
    }
  ])
  .then(employeeInput => {
    let 

  })
  
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./output/index.html", data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your team profile file has been generated!")
    });
};

function init() {

    managerQuestions()
    // Get the answers from user 
    .then(employeeQuestions)
    .then(teamList => {
        return generateHTML(teamList);
    })
    // Use data to display on the ReadMe 
    .then(data => {
        return writeToFile(data);
    })
    // Catch errors
    .catch(err => {
        console.log(err)
    })
  };
  
  // Function call to initialize app
  init();