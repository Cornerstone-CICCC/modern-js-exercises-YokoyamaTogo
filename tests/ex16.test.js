const makeCaze = require("../exercises/ex16.js");

test("return converted string in camel case", () => {
  expect(makeCaze("this is a string", "camel")).toBe("thisIsAString");
});

test("return converted string in pascal case", () => {
  expect(makeCaze("this is a string", "pascal")).toBe("ThisIsAString");
});

test("return converted string in snake case", () => {
  expect(makeCaze("this is a string", "snake")).toBe("this_is_a_string");
});

test("return converted string in kebab case", () => {
  expect(makeCaze("this is a string", "kebab")).toBe("this-is-a-string");
});

test("return converted string in title case", () => {
  expect(makeCaze("this is a string", "title")).toBe("This Is A String");
});

test("return converted string in vowel case", () => {
  expect(makeCaze("this is a string", "vowel")).toBe("thIs Is A strIng");
});

test("return converted string in consonant case", () => {
  expect(makeCaze("this is a string", "consonant")).toBe("THiS iS a STRiNG");
});

test("return converted string in upper and snake case", () => {
  expect(makeCaze("this is a string", ["upper", "snake"])).toBe(
    "THIS_IS_A_STRING"
  );
});
