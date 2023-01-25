const Intern = require("../lib/Intern");

describe("Get School of Intern", () => {
    it("should return the Intern's school from the getSchool() method", () => {
        const school = "ASU";
        const newIntern = new Intern("Justus", 100, "justus@mail.com", school);

        expect(newIntern.getSchool()).toEqual(school);
    });
})

describe("Get Role of Intern", () => {
    it("should return the employee's role from the getRole() method", () => {
        const newIntern = new Intern("Justus", 100, "justus@mail.com", "ASU")

        expect(newIntern.getRole()).toEqual("Intern");
    });
})