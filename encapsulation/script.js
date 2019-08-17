function Employee() {
    let _salary;

    this.getSalary = function () {
        return _salary;
    };

    this.setSalary = function (s) {
        _salary = s;
    };
}

let e1 = new Employee();
console.log(e1);

function Developer(releases) {
    Employee.call(this);
    this.releases = releases;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.constructor = Developer;

let d1 = new Developer(1);
console.log(d1);
e1.setSalary(10000);
d1.getSalary();
