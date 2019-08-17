function Employee() {
    let salary;

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (s) {
        salary = s;
    };
}

let e1 = new Employee();
console.log(e1);
e1.setSalary(100000);
console.log(e1.getSalary());
