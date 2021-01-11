const functions = require("./functions");

// Functions that will run before and after each test
const initDatabase = () => console.log("db initialised");
const closeDatabase = () => console.log("db closed");

//Before and after each single test
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

// Before and after all tests are done
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

// Target certains test to run before or after with describe
// These actions will only run for the tests within the describe block
const petCheck = () => console.log("Checking the pet type....");

describe("Checking Pet types", () => {
  beforeEach(() => petCheck());

  test("Pet is a dog", () => {
    const petType = "Dog";
    expect(petType).toBe("Dog");
  });

  test("Pet is a cat", () => {
    const petType = "Cat";
    expect(petType).toBe("Cat");
  });
});

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
  users = ["guest", "manager", "admin"];
  expect(users).toContain("admin");
});

// Testing async data with Promises
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1); // Verifies 1 assertion is called
  // return keyword otherwise the test will complete before the axios/fetch returns
  return functions
    .fetchUser()
    .then((data) => expect(data.name).toEqual("Leanne Graham"));
});

// Testing async data with Async Await
// Async functon with async await keywords
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1); // Verifies 1 assertion is called

  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
