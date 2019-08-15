function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.countBonuses = function () {
    this.salary += this.salary * 0.2;
};

function Developer(releases, name, age, salary) {
    Employee.call(this, name, age, salary); // inherit Employee this
    this.releases = releases;
}

Developer.prototype = Object.create(Employee.prototype); // create a new object with Employee prototypes inside Developer prototype
Developer.prototype.constructor = Developer; // assign Developer constructor to itself

let d1 = new Developer(5, 'Anna', 25, 25000);
console.log(d1);
