function Employee() {
    let _salary = 0;

    Object.defineProperty(this, '_salary', { // getter setter functions in defineProperty (works better than usual getter setter functions)
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

// after storing property value directly getter setter work from Object.defineProperty
let e1 = new Employee();
let e2 = new Employee();
console.log(e1); // is different for each instance
console.log(e2);

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
