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
