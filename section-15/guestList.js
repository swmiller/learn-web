const guestList = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please enter the guest's name: ", (guestName) => {
  // You can use guestName here
  if (guestList.includes(guestName)) {
    console.log(`Welcome, ${guestName}! You are on the guest list.`);
  } else {
    console.log(`Sorry, ${guestName}. You are not on the guest list.`);
  }
  readline.close();
});
