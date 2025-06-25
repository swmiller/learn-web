function lifeInWeeks(age) {
  const weeksInYear = 52;
  const maxAge = 90;

  const yearsLeft = maxAge - age;
  const daysLeft = yearsLeft * 365;
  const weeksLeft = yearsLeft * weeksInYear;
  const monthsLeft = yearsLeft * 12;
  console.log(
    `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
  );
}
