function fizzBuzz(start = 1, end = 100) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

const fizzBuzzArray = fizzBuzz();
fizzBuzzArray.forEach((item) => console.log(item));
