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

class Developer extends Employee {
    constructor(releases, ...params) { // the rest of the arguments will be in params array: ["Anahit", 25, 25000]
        super(...params); // spreading the params array: "Anahit" 25 25000
        this.releases = releases;
    }

    countBonuses() {
        this.salary = this.salary * 2;
    }
}

let e1 = new Employee('Anna', 25, 25000);
console.log(e1);
e1.countBonuses();
let d1 = new Developer(8, 'Anahit', 25, 25000);
console.log(d1);
d1.countBonuses();
