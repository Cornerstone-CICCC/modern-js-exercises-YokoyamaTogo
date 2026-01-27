const talkingCalendar = require("../exercises/ex13");

test("convert date to format (Month Day nd, Year)", () => {
  expect(talkingCalendar("2017/12/02")).toBe("December 2nd, 2017");
});

test("convert date to format (Month Day th, Year)", () => {
  expect(talkingCalendar("2007/11/11")).toBe("November 11th, 2007");
});

test("convert date to format (Month Day th, Year)", () => {
  expect(talkingCalendar("1987/08/24")).toBe("August 24th, 1987");
});
