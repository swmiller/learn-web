const readline = require("readline");

function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a 4-digit year: ", (input) => {
  const year = parseInt(input, 10);
  if (!/^\d{4}$/.test(input)) {
    console.log("Please enter a valid 4-digit year.");
  } else {
    if (isLeapYear(year)) {
      console.log(`Leap year.`);
    } else {
      console.log(`Not leap year.`);
    }
  }
  rl.close();
});
