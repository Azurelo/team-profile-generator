const Manager = require("../lib/Manager");

describe("Get Office of Manager", () => {
    it("should return the Manager's office from the getOffice() method", () => {
        const office = 2;
        const newManager = new Manager("Justus", 100, "justus@mail.com", 2);

        expect(newManager.getOffice()).toEqual(office);
    });
})

describe("Get Role of Intern", () => {
    it("should return the employee's role from the getRole() method", () => {
        const newManager = new Manager("Justus", 100, "justus@mail.com", 2)

        expect(newManager.getRole()).toEqual("Manager");
    });
})