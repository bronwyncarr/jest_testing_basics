const { TestScheduler } = require("jest");
const functions = require("./functions");

// toBe Matches: toBe, toBeNull, toBeUnderfined, toBeDefined, toBeTruthy, toBeFalsy

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// NOT toBe
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull(null)).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(!true)).toBeFalsy();
});

// Test reference values such as arrays and objects need toEqual to test equality
test("User should be Bronwyn Carr object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Bronwyn",
    lastName: "Carr",
  });
});

// Test number value toBeLessThan, toBeLessThanOrEqual, etc.
test("Should be under 1600", () => {
  const load1 = 1100;
  const load2 = 400;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Should be less than or equal 1600", () => {
  const load1 = 1200;
  const load2 = 400;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Test Regex (lowercase i makes it case insensitive)
test("There is no K or k in team", () => {
  expect("team").not.toMatch(/K/i);
});

// Test Array properties
test("Admin should be in users", () => {
  users = ["guest", "manager", "admin"]
  expect(users).toContain("admin")
})

