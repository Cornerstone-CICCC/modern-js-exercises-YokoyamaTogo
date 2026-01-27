const whereCanIPark = require("../exercises/ex06");

test("return first parking spot available based on vehicle type", () => {
  expect(
    whereCanIPark(
      [
        ["s", "s", "s", "S", "R", "M"],
        ["s", "M", "s", "S", "r", "M"],
        ["s", "M", "s", "S", "r", "m"],
        ["S", "r", "s", "m", "r", "M"],
        ["S", "r", "s", "m", "r", "M"],
        ["S", "r", "S", "M", "M", "S"],
      ],
      "regular"
    )
  ).toStrictEqual([4, 0]);
});
test("return false if not available parking spot", () => {
  expect(
    whereCanIPark(
      [
        ["M", "M", "M", "M"],
        ["M", "s", "M", "M"],
        ["M", "M", "M", "M"],
        ["M", "M", "r", "M"],
      ],
      "small"
    )
  ).toStrictEqual(false);
});

test("return first parking spot available (case sensitive) based on vehicle type", () => {
  expect(
    whereCanIPark(
      [
        ["s", "s", "s", "s", "s", "s"],
        ["s", "m", "s", "S", "r", "s"],
        ["s", "m", "s", "S", "r", "s"],
        ["S", "r", "s", "m", "r", "s"],
        ["S", "r", "s", "m", "R", "s"],
        ["S", "r", "S", "M", "m", "S"],
      ],
      "motorcycle"
    )
  ).toStrictEqual([3, 1]);
});
