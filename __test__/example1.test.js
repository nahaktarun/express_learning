// describe("Feature 1 testing", () => {
//   test("testing for addition of two numbers", () => {
//     expect(1 + 2).toBe(3);
//   });
//   test("testing multiplication of two numbers", () => {
//     expect(1 * 2).toBe(2);
//   });
// });

// describe("Feature 2 testing", () => {
//   test("Returns an object with the correct results", () => {
//     const result = {
//       name: "Tarun",
//       age: 30,
//     };

//     expect(result).toEqual({ name: "Tarun", age: 30 });
//   });
// });

// describe("Feature 3 testing", () => {
//   test("grapefruits are a fruit", () => {
//     expect("grapefruits").toMatch("fruit");
//   });
// });

// Using hooks in jest testing
// 1. beforeAll : runs once before all the test in a test suite
// 2. beforeEach: run before each test in a test suite
// 3. afterAll: run once after all test in a test suite
// 4. afterEach: run after each test in a test suite

describe("My Testing feature 1", () => {
  let value;

  afterAll(() => {
    value = null;
  });
  beforeAll(() => {
    value = 42;
  });

  test("test 1", () => {
    expect(value - 20).toBe(22);
  });
  test("test 2", () => {
    expect(value + 20).toBe(62);
  });
});

// Skipping test: .skip()

describe("skip this feature", () => {
  test.skip("skipped test", () => {
    //
    //
  });
});

// Mocking dependencies:
