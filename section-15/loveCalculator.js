// Using Node.js built-in modules to create a simple love calculator

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first name: ", (firstName) => {
  rl.question("Enter the second name: ", (secondName) => {
    console.log(`First Name: ${firstName}`);
    console.log(`Second Name: ${secondName}`);
    rl.close();

    console.log(
      `\nCalculating love score for ${firstName} and ${secondName}...`
    );

    var loveScore = Math.floor(Math.random() * 100) + 1;
    console.log(`Your love score is ${loveScore}%`);
    if (loveScore > 80) {
      console.log("A match made in heaven!");
    } else if (loveScore > 60) {
      console.log("You two are a great pair!");
    } else if (loveScore > 40) {
      console.log("There's definitely some sparks.");
    } else if (loveScore > 20) {
      console.log("It might take some work, but there's potential.");
    } else {
      console.log("Like cats and dogs—maybe just friends?");
    }

    console.log("Thank you for using the Love Calculator!");
  });
});
