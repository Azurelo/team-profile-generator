const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an employee object", () => {
            const newEmployee = new Employee();
            expect(typeof newEmployee).toEqual("object");
        });
    })

    describe("Name Attribute", () => {
        it("should return a name from the employee the object", () => {
            const employeeName = "Justus";
            const newEmployee = new Employee(employeeName)

            expect(newEmployee.name).toEqual(employeeName);
        });
    })

    describe("id", () => {
        it("should return an ID from the employee the object", () => {
            const employeeId = 1000;
            const newEmployee = new Employee("Justus", employeeId)

            expect(newEmployee.id).toEqual(employeeId);
        });
    })

    describe("email", () => {
        it("should return an email from the employee object", () => {
            const email = "justus@mail.com";
            const newEmployee = new Employee("Justus", 1000, email)

            expect(newEmployee.email).toEqual(email);
        });
    })

    describe("getName", () => {
        it("should return a name from getName()", () => {
            const name = "Justus";
            const newEmployee = new Employee(name)

            expect(newEmployee.getEmployeeName()).toEqual(name);
        });
    })

    describe("getId", () => {
        it("should return the ID from getId()", () => {
            const id = 1000;
            const newEmployee = new Employee("Justus", id)

            expect(newEmployee.getEmployeeID()).toEqual(id);
        });
    })

    describe("getEmail", () => {
        it("should return a email from getEmail()", () => {
            const email = "justus@mail.com";
            const newEmployee = new Employee("Justus", 1000, email)

            expect(newEmployee.getEmployeeEmail()).toEqual(email);
        });
    })

    describe("getRole", () => {
        it("should return the employee's role from getRole()", () => {
            const newEmployee = new Employee()

            expect(newEmployee.getRole()).toEqual("Employee");
        });
    })

})