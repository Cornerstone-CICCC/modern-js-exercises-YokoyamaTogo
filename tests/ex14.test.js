const calculateChange = require("../exercises/ex14");

test("return obj with keys as type of change and amount of each as values, not showing amount = 0", () => {
  expect(calculateChange(1787, 2000)).toStrictEqual({
    toonie: 1,
    dime: 1,
    penny: 3,
  });
});

test("return obj with keys as type of change and amount of each as values, not showing amount = 0", () => {
  expect(calculateChange(2623, 4000)).toStrictEqual({
    tenDollar: 1,
    toonie: 1,
    loonie: 1,
    quarter: 3,
    penny: 2,
  });
});

test("return obj with keys as type of change and amount of each as values, not showing amount = 0", () => {
  expect(calculateChange(501, 1000)).toStrictEqual({
    toonie: 2,
    quarter: 3,
    dime: 2,
    penny: 4,
  });
});
