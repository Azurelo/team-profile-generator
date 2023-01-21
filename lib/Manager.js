class Manager {
    constructor(name, id, email){
        this.email = email;
        this.id = id;
        this.name = name;
    }

    getManagerName(){
        return this.name;
    }

    getManagerID(){
        return this.id;
    }

    getManagerEmail(){
        return this.email;
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;