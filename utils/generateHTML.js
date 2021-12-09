  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let badge = renderLicenseBadge(license);
    let link = renderLicenseLink(license);
    return [badge, link];
  }
  
  // TODO: Create a function to generate markdown for README
  function generateHTML(data) {
    let licenseString = renderLicenseSection(data.license);
  
    return `# ${data.title}
  ${licenseString[0]}
  ## Description  
  ${data.motivation}  
  ${data.why}  
  ${data.solution}  
  ${data.lesson}
  ## Table of Contents  
  [Description](#description)   
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)  
  ## Installation  
  ${data.installation}
  ## Usage  
  ![Screenshot of App](${data.media})
  ${data.usage}
  ## License 
  ${data.license}
  ${licenseString[1]}
  ## Contributing  
  ${data.guidelines}
  ## Tests  
  ${data.test}
  ## Questions
  Link to github: [Click Here](https://github.com/${data.username})  
  Please submit any additional questions you may have in an email to ${data.email}
  `;
  }
  
  module.exports = generateHTML;