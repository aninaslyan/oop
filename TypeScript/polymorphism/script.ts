import { IDeveloper, IEmployee } from "../types";

class Employee implements IEmployee{
    constructor(public name: string, public age: number, public salary: number) {
    }

    countBonuses() {
        this.salary = this.salary * 0.2;
    }
}

class Developer extends Employee implements IDeveloper{
    releases: number;

    constructor(releases: number, name: string, age: number, salary: number) {
        super(name, age, salary);
        this.releases = releases;
    }

    countBonuses() {
        this.salary = this.salary * 2;
    }
}

let e1 = new Employee('Anna', 25, 25000);
let d1 = new Developer(8, 'Anahit', 25, 25000);
e1.countBonuses();
d1.countBonuses();
console.log(e1.salary);
console.log(d1.salary);
