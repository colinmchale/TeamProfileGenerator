

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-white bg-primary">
            <div class="card-header role"><h4>${manager.name}</h4></div>
            <div class="card-body">
                <i class="bi bi-briefcase-fill"></i><h5 class="card-title">Manager</h5>
                <p class="card-text id">ID: ${manager.id}</p>
                <p class="card-text email"><a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text office">Office Number: ${manager.officeNum}</p>
            </div>
        </div>
    </div>`
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-white bg-success">
            <div class="card-header role"><h4>${engineer.name}</h4></div>
            <div class="card-body">
                <i class="bi bi-puzzle-fill"></i><h5 class="card-title">Engineer</h5>
                <p class="card-text id">ID: ${engineer.id}</p>
                <p class="card-text email"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="card-text github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
}

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 text-white bg-secondary">
            <div class="card-header role"><h4>${intern.name}</h4></div>
            <div class="card-body">
                <i class="bi bi-mortarboard-fill"></i><h5 class="card-title">Intern</h5>
                <p class="card-text id">ID: ${intern.id}</p>
                <p class="card-text email"><a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`;
}

generateHTML = (data) => {

    // array for cards 
    teamPage = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamPage.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamPage.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamPage.push(internCard);
        }
        
    }

    // joining cards
    const employeeCards = teamPage.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}


  //Create a function to generate markdown for HTML
  function generateTeamPage(employeeCards) {
   
    return `<!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="">
            <title>Team Profile</title>
        </head>
        <body>
    


        ${employeeCards}



            <script src=""></script>
        </body>
    </html>
    `;
  }
  
  module.exports = generateHTML;