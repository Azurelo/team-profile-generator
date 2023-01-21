class Engineer {
    constructor(name, id, email){
        this.email = email;
        this.id = id;
        this.name = name;
    }

    getEngineerName(){
        return this.name;
    }

    getEngineerID(){
        return this.id;
    }

    getEngineerEmail(){
        return this.email;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;