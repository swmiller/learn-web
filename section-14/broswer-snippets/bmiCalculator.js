function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8); 
