import { IEmployee, IDeveloper } from '../types';

class Employee implements IEmployee {
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    countBonuses() {
        this.salary += this.salary * 0.2;
    }
}

class Developer extends Employee implements IEmployee, IDeveloper {
    releases: number;
    constructor(releases: number, name: string, age: number, salary: number) {
        super(name, age, salary); // arguments can't be send by spread operator, compiler doesn't recognise the types
        this.releases = releases;
    }
}

let d1 = new Developer(5, 'Anna', 25, 25000);
console.log(d1);
