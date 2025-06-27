let bottles = 99;

while (bottles > 0) {
  let bottleWord = bottles === 1 ? "bottle" : "bottles";
  let nextBottles = bottles - 1;
  let nextBottleWord = nextBottles === 1 ? "bottle" : "bottles";

  console.log(
    `${bottles} ${bottleWord} of beer on the wall, ${bottles} ${bottleWord} of beer.`
  );
  if (nextBottles > 0) {
    console.log(
      `Take one down and pass it around, ${nextBottles} ${nextBottleWord} of beer on the wall.\n`
    );
  } else {
    console.log(
      "Take one down and pass it around, no more bottles of beer on the wall.\n"
    );
  }
  bottles--;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log(
  `Go to the store and buy some more, 99 bottles of beer on the wall.`
);
