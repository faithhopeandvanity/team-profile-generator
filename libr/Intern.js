const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, university) {
        super(name, id, email);
        this.university = university;
    }

    getUniversity() {
        return this.university;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
