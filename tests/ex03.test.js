const numberOfVowels = require("../exercises/ex03");

test("return number of vowels", () => {
  expect(numberOfVowels("orange")).toBe(3);
});
test("return number of vowels", () => {
  expect(numberOfVowels("cornerstone college")).toBe(7);
});
test("return number of vowels", () => {
  expect(numberOfVowels("aeiou")).toBe(5);
});
