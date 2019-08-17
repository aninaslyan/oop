function Employee() {
    // this._salary;

    // this.getSalary = function () {
    //     return _salary;
    // };
    //
    // this.setSalary = function (s) {
    //     _salary = s;
    // };

    // if we really wanna create a private (protected) class member
    let _salary;

    Object.defineProperty(this, '_salary', {
        get: function () {
            return _salary;
        },
        set: function (s) {
            if (typeof s !== 'number') {
                throw new Error("The value must be a number");
            }
            _salary = s;
        }
    });
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
// e1.setSalary(10000);
// d1.getSalary();
