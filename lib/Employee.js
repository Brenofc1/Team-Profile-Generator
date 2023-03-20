class Employee {
    constructor (name, id, functions,  email) {
        this.name = name;
        this.id = id;
        this.functions = functions;
        this.email = email;
    }

    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }

    getFunctions () {
        return this.functions;
        };
    }

    getEmail () {
        return this.email;
    }

    getRole() {
        return "Employee"
    }

}


module.exports = Employee;