console.log("Hello from Node.js!");

const rand = Math.random();
console.log("Random number:", rand);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Example usage:
console.log("Dice roll:", rollDice());

function getRandomUpToN(n) {
  return Math.floor(Math.random() * n);
}

// Example usage:
console.log("Random up to 10:", getRandomUpToN(10));
