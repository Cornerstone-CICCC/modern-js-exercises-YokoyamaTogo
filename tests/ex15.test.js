const organizeInstructors = require("../exercises/ex15.js");

test("return new object with course names as keys and instructors as array", () => {
  expect(
    organizeInstructors([
      { name: "Samuel", course: "iOS" },
      { name: "Victoria", course: "Web" },
      { name: "Karim", course: "Web" },
      { name: "Donald", course: "Web" },
    ])
  ).toStrictEqual({ iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"] });
});

test("return new object with course names as keys and instructors as array", () => {
  expect(
    organizeInstructors([
      { name: "Brendan", course: "Blockchain" },
      { name: "David", course: "Web" },
      { name: "Martha", course: "iOS" },
      { name: "Carlos", course: "Web" },
    ])
  ).toStrictEqual({
    Blockchain: ["Brendan"],
    Web: ["David", "Carlos"],
    iOS: ["Martha"],
  });
});
