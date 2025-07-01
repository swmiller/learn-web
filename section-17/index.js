// Returns a random integer from 1 to 6 (inclusive), simulating a dice roll
function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Rolls two dice, updates the dice images, and returns a string indicating the winner
function rollDice() {
  // Generate random number for Player 1
  const rand1 = randomNumber();
  // Select the first dice image element
  const img1 = document.querySelector(".img1");
  // Set the image source based on the random number
  img1.src = `./images/dice${rand1}.png`;

  // Generate random number for Player 2
  const rand2 = randomNumber();
  // Select the second dice image element
  const img2 = document.querySelector(".img2");
  // Set the image source based on the random number
  img2.src = `./images/dice${rand2}.png`;

  // Compare the two random numbers and return the winner string
  if (rand1 > rand2) {
    return `🚩 Player 1 wins!`;
  } else if (rand2 > rand1) {
    return `Player 2 wins! 🚩`;
  } else {
    return `🤝 It's a draw!`;
  }
}

// Calls rollDice(), then updates the <h1> element with the result string
function refreshMe() {
  const result = rollDice();
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.innerText = result;
  }
}

// When the page loads, add event listeners to the play button
// - On click: roll the dice and update the heading
// - On Enter/Space keydown: roll the dice and update the heading (for accessibility)
window.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("play-btn");
  if (playBtn) {
    playBtn.addEventListener("click", refreshMe);
    playBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") refreshMe();
    });
  }
});
