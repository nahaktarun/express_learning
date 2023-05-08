// const { doubleAdd } = require("./app.js");

// jest.mock("./math.js", () => ({
//   add: jest.fn().mockReturnValue(3),
// }));

// test("mock module", () => {
//   expect(doubleAdd(1, 2)).toBe(6);
//   expect(add).toHaveBeenCalledWith(1, 2);
// });

// Asynchronous testing

async function fetchData() {
  return Promise.resolve("data");
}

test("async testing", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});
