const squareCode = require("../exercises/ex18.js");

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(squareCode("chill out")).toBe("clu hlt io");
});

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(squareCode("feed the dog")).toBe("fto ehg ee dd");
});

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(squareCode("have a nice day")).toBe("hae and via ecy");
});

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(
    squareCode(
      "if man was meant to stay on the ground god would have given us roots"
    )
  ).toBe("imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau");
});
