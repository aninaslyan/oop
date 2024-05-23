import { IEmployee, IDeveloper } from '../types';

abstract class Employee implements IEmployee { // can't create instances of an abstract class
    protected constructor(public name: string, public age: number, public salary: number) { // abstract constructor can be made protected
    }

    abstract bonus: number;

    abstract countSalary(): number;
}

class Developer extends Employee implements IEmployee, IDeveloper {
    releases: number;

    constructor(releases: number, name: string, age: number, salary: number) {
        super(name, age, salary); // Calling the constructor of the parent class
        this.releases = releases;
    }

    bonus = 2; // implementation of abstract property bonus
    countSalary(): number { // implementation of abstract method countSalary
        return this.salary * this.bonus;
    }
}

let d1 = new Developer(5, 'Anna', 25, 25000);
console.log(d1);
