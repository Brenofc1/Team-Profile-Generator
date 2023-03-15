const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Legolas";
    const employeeInstance = new Engineer("Legolas", 2, "legolas@thelordofrings.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Legolas";
    const employeeInstance = new Engineer("Legolas", 2, "legolas@thelordofrings.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Legolas", 2, "legolas@thelordofrings.com", "Legolas");
    expect(employeeInstance.getRole()).toBe(returnValue);
});