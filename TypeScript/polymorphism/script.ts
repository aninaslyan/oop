import { IDeveloper, IEmployee } from "../types";

// Dynamic Polymorphism (Method Overriding): This occurs when a subclass provides a different implementation of a method that is already provided by its parent class. It's determined at runtime.
class Employee implements IEmployee {
    constructor(public name: string, public age: number, public salary: number) {
    }

    countBonuses() {
        this.salary = this.salary * 0.2;
    }
}

class Developer extends Employee implements IDeveloper {
    releases: number;

    constructor(releases: number, name: string, age: number, salary: number) {
        super(name, age, salary);
        this.releases = releases;
    }

    // Overriding
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

// Static Polymorphism (Method Overloading): This occurs when multiple methods have the same name but different parameters. It's determined at compile time.
class Calculator {
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;
    add(a: any, b: any, c?: any): any {
        if (c) {
            return a + b + c;
        } else {
            return a + b;
        }
    }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2, 3));
