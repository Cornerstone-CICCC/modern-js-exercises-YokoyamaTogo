const repeatNumbers = require("../exercises/ex08");

test("return single string with first number of array repeated times based on second number of the array", () => {
  expect(repeatNumbers([[1, 10]])).toBe("1111111111");
});
test("return single string with first number of array repeated times based on second number of the array - multiple arrays", () => {
  expect(
    repeatNumbers([
      [1, 2],
      [2, 3],
    ])
  ).toBe("11, 222");
});
test("return single string with first number of array repeated times based on second number of the array - multiple arrays", () => {
  expect(
    repeatNumbers([
      [10, 4],
      [34, 6],
      [92, 2],
    ])
  ).toBe("10101010, 343434343434, 9292");
});
