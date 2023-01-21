class Intern {
    constructor(name, id, email){
        this.email = email;
        this.id = id;
        this.name = name;
    }

    getInternName(){
        return this.name;
    }

    getInternID(){
        return this.id;
    }

    getInternEmail(){
        return this.email;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;