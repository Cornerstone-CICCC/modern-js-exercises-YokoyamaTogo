const camelCase = require("../exercises/ex09");

test("convert string with multiple spaces to camel case format", () => {
  expect(camelCase("this is a string")).toBe("thisIsAString");
});
test("convert string with space to camel case format", () => {
  expect(camelCase("loopy cornerstone")).toBe("loopyCornerstone");
});
test("return same string if no spaces", () => {
  expect(camelCase("supercalifragalisticexpialidocious")).toBe(
    "supercalifragalisticexpialidocious"
  );
});
