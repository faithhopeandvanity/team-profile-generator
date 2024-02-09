const Engineer = require("../libr/Engineer");

test("Create a GitHub.", () => {
    const testGithub = "faithhopeandvanity";
    const employeeInstance = new Engineer("Joe", 2, "faithhopeandvanity@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return Github.", () => {
    const testGithub = "faithhopeandvanity";
    const employeeInstance = new Engineer("Joe", 2, "faithhopeandvanity@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Joe", 2, "faithhopeandvanity@gmail.com", "faithhopeandvanity");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
