const {
  totalVolume,
  sphereVolume,
  coneVolume,
  prismVolume,
} = require("../exercises/ex11");

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

test("return volume of sphere", () => {
  expect(4186 < sphereVolume(10) && sphereVolume(10) < 4189).toBe(true);
});

test("return volume of cone", () => {
  expect(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49).toBe(true);
});

test("return volume of prism", () => {
  expect(prismVolume(3, 4, 5) === 60).toBe(true);
});

test("return volume of all solids added", () => {
  expect(272000 < totalVolume(duck) && totalVolume(duck) < 275000).toBe(true);
});
