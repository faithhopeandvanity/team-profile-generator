const Manager = require("../libr/Manager");

test("Creates office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Joe", 2, "faithhopeandvanity@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("'Test' of 'officeNumber' to return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Joe", 2, "faithhopeandvanity@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Tests role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Joe", 2, "faithhopeandvanity@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});