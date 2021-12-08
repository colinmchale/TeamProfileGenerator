class Employee {
// * `name`
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }
// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`
}

module.exports = Employee;