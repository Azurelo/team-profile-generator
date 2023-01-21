class Employee {
    constructor(name, id, email){
        this.email = email;
        this.id = id;
        this.name = name;
    }

    getEmployeeName(){
        return this.name;
    }

    getEmployeeID(){
        return this.id;
    }

    getEmployeeEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }
}

module.exports = Employee;