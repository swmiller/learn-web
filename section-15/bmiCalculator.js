const readline = require("readline");

function calculateBMI(weight, height) {
  // BMI = weight (kg) / (height (m))^2
  return weight / (height * height);
}

function analyzeBMI(bmi) {
  if (bmi < 18.5) {
    return `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
  } else {
    return `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your weight in kilograms: ", (weightInput) => {
  const weight = parseFloat(weightInput);
  rl.question("Enter your height in meters: ", (heightInput) => {
    const height = parseFloat(heightInput);
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      console.log("Please enter valid positive numbers for weight and height.");
    } else {
      const bmi = calculateBMI(weight, height);
      console.log(analyzeBMI(bmi));
    }
    rl.close();
  });
});
