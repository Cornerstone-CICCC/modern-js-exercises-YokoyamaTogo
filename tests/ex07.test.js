const checkAir = require("../exercises/ex07");

test("return Polluted if dirty % > treshold", () => {
  expect(
    checkAir(
      [
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
      ],
      0.3
    )
  ).toBe("Polluted");
});
test("return Polluted if dirty % > treshold", () => {
  expect(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)).toBe(
    "Polluted"
  );
});
test("return Clean if dirty % < treshold", () => {
  expect(
    checkAir(
      ["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"],
      0.9
    )
  ).toBe("Clean");
});
