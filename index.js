const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern'); 

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
          console.log(`Please enter a name!`);
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
          console.log(`Please enter an ID!`);
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
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false; 
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
  })
};

const employeeQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: `Please select the Employee's role:`,
      name: 'role',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      message: `Please enter the Employee's name:`,
      name: 'name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter a name!`);
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
          console.log(`Please enter an ID!`);
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
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Employee's github username:`,
      name: 'github',
      when: (input) => input.role === 'Engineer',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter a github username!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      message:  `Please enter the Intern's school:`,
      name: 'school',
      when: (input) => input.role === 'Intern',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter a school!`);
          return false;
        }
      }
    },
    {
      type: 'confirm',
      message: 'Would you like to add more team members?',
      name: 'confirmAdditional',
      default: false
    }
  ])
  .then(employeeInput => {
    let { name, id, email, role, github, school, confirmAdditional } = employeeInput;
    let employee;

    if (role === 'Engineer') {
      employee = new Engineer (name, id, email, github)
    } else {
      employee = new Intern (name, id, email, school)
    };

    teamList.push(employee);

    if (confirmAdditional) {
      return employeeQuestions(teamList);
    } else {
      return teamList;
    }
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