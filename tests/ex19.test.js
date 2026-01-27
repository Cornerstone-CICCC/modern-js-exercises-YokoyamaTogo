const { queenThreat, generateBoard } = require("../exercises/ex19.js");

test("return false if queens are not able to reach each other in any direction", () => {
  expect(queenThreat(generateBoard([0, 0], [5, 7]))).toBe(false);
});

test("return true if queens are in the same diagonal line", () => {
  expect(queenThreat(generateBoard([0, 5], [5, 0]))).toBe(true);
});

test("return true if queens are in the same column", () => {
  expect(queenThreat(generateBoard([6, 3], [2, 3]))).toBe(true);
});

test("return true if queens are in the same row", () => {
  expect(queenThreat(generateBoard([1, 4], [1, 0]))).toBe(true);
});
