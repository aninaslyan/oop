class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        Employee.employeeCount++;
    }

    countBonuses() {
        this.salary += this.salary * 0.2;
    }

    static employeeCount = 0;

    static countEmployees () {
        return Employee.employeeCount;
    }
}

let d1 = new Employee('Anna', 15, 25000);
let d2 = new Employee('Mika', 10, 30000);
let d3 = new Employee('Kara', 30, 35000);
let d4 = new Employee('Mara', 40, 60000);

// EmployeeCount & countEmployees are accessible from class name
console.log(Employee.countEmployees());
