const Intern = require("../libr/Intern");

test("Create institution.", () => {
    const testUniversity = "University Name";
    const employeeInstance = new Intern("Joe", 2, "faithhopeandvanity@gmail.com", testUniversity);
    expect(employeeInstance.university).toBe(testUniversity);
});

test("Testing officeNumber to return office number.", () => {
    const testUniversity = "University Name";
    const employeeInstance = new Intern("Joe", 2, "faithhopeandvanity@gmail.com", testUniversity);
    expect(employeeInstance.getUniversity()).toBe(testUniversity);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Joe", 2, "faithhopeandvanity@gmail.com", "University Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});