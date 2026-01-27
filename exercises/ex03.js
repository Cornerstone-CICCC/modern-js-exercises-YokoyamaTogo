/*
In this exercise, we will be counting the number of vowels that appear in a given string.
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/
const vowels = ["a", "e", "i", "u", "o"]
const numberOfVowels = function (data) {
  const vowelsOnlyStr = data.split("").filter(str => vowels.includes(str))
  return vowelsOnlyStr.length
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
