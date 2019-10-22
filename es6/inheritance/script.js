class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    countBonuses() {
        this.salary += this.salary * 0.2;
    }
}

class Developer extends Employee { // inherit Employee's prototype
    constructor( releases, name, age, salary) {
        super(name, age, salary); // inherit (call) Employee's constructor
        // cannot access this until super has been called: Error
        this.releases = releases; // you can use here countBonuses method from here by super.countBonuses()
    }
}

let d1 = new Developer(5, 'Anna', 25, 25000);
// calling child, paren't constructor function is being called automatically (if there is no: default), then child's (in pre es6 this don't happen)
// can't be called without new: Error
console.log(d1);
