const result = [...Array(100).keys()]
  .map(val => val + 1)
  .map(val => {
    if (val % 15 === 0) return "FizzBuzz";
    if (val % 3 === 0) return "Fizz";
    if (val % 5 === 0) return "Buzz";
    return val;
  })
  .join(", ");

console.log(result);
