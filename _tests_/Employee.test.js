const Employee = require("../libr/Employee");

test("Create a new employee in roster.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Tests name.", () => {
    const name = "Joe";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Joe", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "faithhopeandvanity@gmail.com";
    const employeeInstance = new Employee("Joe", 2, email);
    expect(employeeInstance.email).toBe(email);
})


test("Get name with getName method.", () => {
    const testName = "Joe";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID w/ getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Joe", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test email using getEmail method.", () => {
    const testEmail = "faithhopeandvanity@gmail.com";
    const employeeInstance = new Employee("Joe", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Tests role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Joe", 2, "faithhopeandvanity@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})