function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.countBonuses = function () { // a method inside Employee prototype
    this.salary += this.salary * 0.2;
};

function Developer(releases, name, age, salary) {
    Employee.call(this, name, age, salary);
    this.releases = releases;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.countBonuses = function () { // this method has the same name as it's in Employee prototype
    this.salary = this.salary * 2;
};

let d1 = new Developer(5, 'Anna', 25, 25000);
console.log(d1);
d1.countBonuses(); // countBonuses method from Developer prototype is being called: If there were not such a method, the method from Employee.prototype would be executed
console.log(d1);
