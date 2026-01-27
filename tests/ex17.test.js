const urlDecode = require("../exercises/ex17.js");

test('return obj with key and value separated by "="', () => {
  expect(urlDecode("duck=rubber")).toStrictEqual({ duck: "rubber" });
});

test('return obj with multiple key and value separated by "="', () => {
  expect(urlDecode("city=Vancouver&weather=lots%20of%20rain")).toStrictEqual({
    city: "Vancouver",
    weather: "lots of rain",
  });
});

test("return value from object based on selected key", () => {
  expect(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather).toBe(
    "lots of rain"
  );
});
