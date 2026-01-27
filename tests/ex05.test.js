const urlEncode = require("../exercises/ex05");

test("return encoded url replacing space with %20", () => {
  expect(urlEncode("cornerstone college")).toBe("cornerstone%20college");
});

test("return encoded url ignoring spaces at the beginning or end", () => {
  expect(urlEncode(" cornerstone college ")).toBe("cornerstone%20college");
});

test("return encoded url replacing multiple spaces with %20", () => {
  expect(urlEncode("blue is greener than purple for sure")).toBe(
    "blue%20is%20greener%20than%20purple%20for%20sure"
  );
});
