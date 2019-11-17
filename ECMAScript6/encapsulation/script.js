class Employee {
    _salary = 0; // private (# this sign will replace private members in the future)

    getSalary() {
        return this._salary;
    }

    setSalary(s) {
        if (typeof s !== 'number') {
            throw new Error("The value must be a number");
        }
        this._salary = s;
    }
}

let e1 = new Employee();
console.log(e1);

class Developer extends Employee {
    constructor(releases) {
        super();
        this.releases = releases;
    }
}

let d1 = new Developer(1);
console.log(d1);
