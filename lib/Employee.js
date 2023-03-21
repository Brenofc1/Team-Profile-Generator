class Employee {
    constructor (name, id,  email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }

    getPosition () {
        return this.position;
    }

    getEmail () {
        return this.email;
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;