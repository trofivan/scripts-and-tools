const sum = (...args) => {

  const result = args.reduce((acc, n) => n + acc, 0);
  sum.valueOf = () => result;
  return sum;
  // const aSum = a.reduce((acc, n) => acc + n, 0);

  // return (...b) => {
  //   const bSum = b.reduce((acc, n) => acc + n, 0);

  //   return aSum + bSum;
  // };
};

console.log(sum(1, 2)(3, 4) + 0);

// let assert = require("assert");

// const add = (...args) => {
//   const result = args.reduce((acc, n) => acc + n, 0);
//   const fn = add.bind(null, result);
//   fn.valueOf = () => result;
//   return fn;
// };

// assert.equal(add(5, 2), 5 + 2);
// assert.equal(add(5)(2), 5 + 2);
// assert.equal(add(5)(1)(1), 5 + 1 + 1);
// assert.equal(add(1, 2)(3)(4)(5), 1 + 2 + 3 + 4 + 5);
