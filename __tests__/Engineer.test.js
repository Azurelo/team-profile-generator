const Engineer = require("../lib/Engineer");

describe("Get GitHub Info", () => {
    it("should return the github username of the engineer object", () => {
        const gitHub = "Azurelo";
        const newEmployee = new Engineer("Justus", 100, "justus@mail.com", gitHub);
        expect(newEmployee.getGitHub()).toEqual(gitHub);
    });
})

describe("Get Role Info", () => {
    it("should return the employee's role from the getRole() method", () => {
        const obj = new Engineer("Justus", 1, "justus@mail.com", "Azurelo")

        expect(obj.getRole()).toEqual("Engineer");
    });
})