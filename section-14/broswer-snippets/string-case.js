var someString = "hello world";

// Convert to uppercase
var upperCaseString = someString.toUpperCase();
console.log("Upper case: " + upperCaseString); // Output: "HELLO WORLD"

// Convert to sentence case
function toSentenceCase(str) {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Input must be a non-empty string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Back to lowercase
var lowerCaseString = upperCaseString.toLowerCase();
console.log("Lower case: " + lowerCaseString); // Output: "hello world"

var sentenceCaseString = toSentenceCase(someString);
console.log("Sentence case:" + sentenceCaseString); // Output: "Hello world"

// Convert to title case
function toTitleCase(str) {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Input must be a non-empty string");
  }
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

var titleCaseString = toTitleCase(someString);
console.log("Title case: " + titleCaseString); // Output: "Hello World"
