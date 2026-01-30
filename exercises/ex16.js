/*Caze Maker II
We will still be given an input string to convert.
However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let list = []
  if (Array.isArray(caze)) {
    list = caze
  } else {
    list = [caze]
  }

  const order = [
    "camel",
    "pascal",
    "snake",
    "kebab",
    "title",
    "vowel",
    "consonant",
    "upper",
    "lower"
  ]

  for (let i = 0; i < order.length; i++) {
    const style = order[i]
    if (!list.includes(style)) {
      continue
    }

    if (style === "camel") {
      const words = input.split(" ")
      let out = ""
      for (let j = 0; j < words.length; j++) {
        let w = words[j].toLowerCase()
        if (j === 0) {
          out += w
        } else {
          out += w[0].toUpperCase() + w.slice(1)
        }
      }
      input = out
    } else if (style === "pascal") {
      const words = input.split(" ")
      let out = ""
      for (let j = 0; j < words.length; j++) {
        let w = words[j].toLowerCase()
        out += w[0].toUpperCase() + w.slice(1)
      }
      input = out
    } else if (style === "snake") {
      input = input
        .split(" ")
        .map((w) => w.toLowerCase())
        .join("_")
    } else if (style === "kebab") {
      input = input
        .split(" ")
        .map((w) => w.toLowerCase())
        .join("-")
    } else if (style === "title") {
      const words = input.split(" ")
      let out = ""
      for (let j = 0; j < words.length; j++) {
        let w = words[j].toLowerCase()
        out += w[0].toUpperCase() + w.slice(1)
        if (j !== words.length - 1) {
          out += " "
        }
      }
      input = out
    } else if (style === "vowel") {
      let out = ""
      for (let j = 0; j < input.length; j++) {
        const char = input[j]
        if ("aeiou".includes(char.toLowerCase())) {
          out += char.toUpperCase()
        } else {
          out += char
        }
      }
      input = out
    } else if (style === "consonant") {
      let out = ""
      for (let j = 0; j < input.length; j++) {
        const char = input[j]
        if (!"aeiou".includes(char.toLowerCase())) {
          out += char.toUpperCase()
        } else {
          out += char
        }
      }
      input = out
    } else if (style === "upper") {
      input = input.toUpperCase()
    } else if (style === "lower") {
      input = input.toLowerCase()
    }
  }

  return input
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
