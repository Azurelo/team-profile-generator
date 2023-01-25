
function generateHTML(data) {

    return `# ${data.title}
  
  ## Description
  ${data.description}
  ${data.projectImage}
  ## 📝 Table of Contents
  - <a href="#description">Description</a>
  - <a href="#installation">Installation</a>
  - <a href="#usage">Usage</a>
  - <a href="#contributors">Contributors</a>
  - <a href="#license">License</a>
  - <a href="#questions">Questions</a>
  - <a href="#tests">Tests</a>
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ![Project Image](utils/${data.projectImage})
  
  ${data.projectVideo}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Visit https://github.com/${data.github}/ or contact ${data.email} for any questions.
  
  ## Link
  ${data.link}
  
  ${licenseSection}
  `;
  }
  
  module.exports = generateMarkdown;