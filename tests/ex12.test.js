const chooseRecipe = require("../exercises/ex12");

const bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
const bakeryB = ["milk", "butter", "cream cheese"];
const recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

test("return recipe name if one of ingredients are included in each bakery", () => {
  expect(chooseRecipe(bakeryA, bakeryB, recipes)).toBe("Persian Cheesecake");
});

const bakeryC = ["potatoes", "bay leaf", "raisins"];
const bakeryD = ["red bean", "dijon mustard", "apples"];
const recipes2 = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

test("return recipe name if one of ingredients are included in each bakery", () => {
  expect(chooseRecipe(bakeryC, bakeryD, recipes2)).toBe(
    "Nima's Famous Dijon Raisins"
  );
});
