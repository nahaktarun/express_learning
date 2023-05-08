jest.mock("./myModule.js");

const myModule = require("./myModule");

test("call functions", () => {
  myModule.myfunction();
  expect(myModule.myfunction).toHaveBeenCalled();
});

// mocking of functions
function add(a, b) {
  return a + b;
}

test("mock function", () => {
  const mockAdd = jest.fn();

  mockAdd.mockReturnValue(3);

  expect(mockAdd(1, 2)).toBe(3);

  expect(mockAdd).toHaveBeenCalledWith(1, 2);
});

function mockAdd() {
  return 3;
}
mockAdd(1, 2);

// mocking of modules
