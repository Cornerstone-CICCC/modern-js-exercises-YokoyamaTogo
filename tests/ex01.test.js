const sumLargestNumbers = require("../exercises/ex01");

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(sumLargestNumbers([1, 10])).toBe(11);
});
test("adds 2 largest numbers from array of 3 elements", () => {
  expect(sumLargestNumbers([1, 2, 3])).toBe(5);
});
test("adds 2 largest numbers from array of multiple elements", () => {
  expect(sumLargestNumbers([10, 4, 34, 6, 92, 2])).toBe(126);
});

test("adds 2 largest numbers from array of multiple negative elements", () => {
  expect(sumLargestNumbers([-10, -4, -34, -6, -92, -2])).toBe(-6);
});
