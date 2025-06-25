// Length of a string
var input = prompt("Enter your 'tweet':");
var maxSize = 140;
var inputLength = input.length;
var countLeft = maxSize - inputLength;
alert(
  "You entered " +
    inputLength +
    " characters. You have " +
    countLeft +
    " characters letf."
);

// Slice the string to fit the max size
if (inputLength > maxSize) {
  input = input.slice(0, maxSize);
  alert("Your tweet was too long. It has been shortened to: " + input);
}
