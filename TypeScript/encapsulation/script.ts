class Employee {
    // the shorten way of initializing variables in constructor
    constructor(public name: string, public readonly age: number, private salary: number, protected gender: string) {
    }

    // only getter or setter should be used
    get getSalary() {
        return this.salary;
    }

    set setSalary(amount: number) {
        this.salary = amount;
    }
}

class Developer extends Employee {
    releases: number;

    constructor(releases: number, name: string, age: number, salary: number, gender: string) {
        super(name, age, salary, gender);
        this.releases = releases;
    }

    seeEmployeeGender() {
        return this.gender;
    }
}

let d1 = new Developer(5, 'Anna', 25, 25000, 'feminine');
console.log(d1.name);
console.log(d1.age);
// d1.age = 5;// cannot assign age, it's read only property
// console.log(d1.salary);// property salary is private
d1.setSalary = 2;
console.log(d1.getSalary);
// console.log(d1.gender);// gender is protected
console.log(d1.seeEmployeeGender());
