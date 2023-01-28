const createTeam = (teamArray) =>{
  const createManager = (manager) => {
    return `
    <div class="col d-flex justify-content-center">
                <div class="card" style="width: 20rem">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item heading">${manager.getEmployeeName()}</li>
                            <li class="list-group-item heading">🍵${manager.getRole()}</li>
                            <li class="list-group-item">${manager.getEmployeeID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmployeeEmail()}">${manager.getEmployeeEmail()}</a></li>
                            <li class="list-group-item">${manager.getOffice()}</li>
                        </ul>
                    </div>
                </div>
              </div>
    `
  }
  const createEngineer = (engineer) => {
    return `
    <div class="col d-flex justify-content-center">
                <div class="card" style="width: 20rem">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item heading">${engineer.getEmployeeName()}</li>
                            <li class="list-group-item heading">💻${engineer.getRole()}</li>
                            <li class="list-group-item">${engineer.getEmployeeID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmployeeEmail()}">${engineer.getEmployeeEmail()}</a></li>
                            <li class="list-group-item"> GitHub:<a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                        </ul>
                    </div>
                </div>
              </div>  
    `
  }
  const createIntern = (intern) => {
    return `
    <div class="col d-flex justify-content-center">
                <div class="card" style="width: 20rem">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item heading">${intern.getEmployeeName()}</li>
                            <li class="list-group-item heading">🧑‍🎓${intern.getRole()}</li>
                            <li class="list-group-item">${intern.getEmployeeID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmployeeEmail()}">${intern.getEmployeeEmail()}</a></li>
                            <li class="list-group-item">${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
              </div> 
    `
  }
  
  const generatedCards = [];
  
  generatedCards.push(
    teamArray
      .filter((teamMember) => teamMember.getRole() === "Manager")
      .map((manager) => createManager(manager))
      .join("")
  );
  generatedCards.push(
    teamArray
      .filter((teamMember) => teamMember.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  generatedCards.push(
    teamArray
      .filter((teamMember) => teamMember.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return generatedCards.join("");
};








module.exports = (teamArray) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <title>Team Creator</title>
</head>
  <body>
    <h1>Team generator</h1>
      <div class="row">
        ${createTeam(teamArray)}
      </div>
    </body>
    </html>
  `;
  }
