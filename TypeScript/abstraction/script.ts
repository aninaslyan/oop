import { IEmployee, IDeveloper } from '../types';

abstract class Employee implements IEmployee { //
    protected constructor(public name: string, public age: number, public salary: number) { // abstract constructor can be made protected
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract bonus: number;
    abstract countSalary(): number;
}

class Developer extends Employee implements IEmployee, IDeveloper {
    releases: number;

    constructor(releases: number, name: string, age: number, salary: number) {
        super(name, age, salary);
        this.releases = releases;
    }

    bonus = 2; // must implement bonus
    // must implement countBonuses
    countSalary(): number {
        return this.salary * this.bonus;
    }
}

let d1 = new Developer(5, 'Anna', 25, 25000);
console.log(d1);
