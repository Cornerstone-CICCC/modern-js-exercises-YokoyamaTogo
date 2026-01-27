const conditionalSum = require("../exercises/ex02");

test("sum all even numbers", () => {
  expect(conditionalSum([1, 2, 3, 4, 5], "even")).toBe(6);
});
test("sum all odd numbers", () => {
  expect(conditionalSum([1, 2, 3, 4, 5], "odd")).toBe(9);
});
test("sum all even numbers", () => {
  expect(conditionalSum([13, 88, 12, 44, 99], "even")).toBe(144);
});
test("return 0 if empty array", () => {
  expect(conditionalSum([], "odd")).toBe(0);
});
