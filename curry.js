const sum = args => args.reduce((acc, val) => acc + val, 0);
const div = args => args.reduce((acc, val, indx) => indx === 0 ? acc : acc / val, args[0] || 0);

const curry = fn => (...args) => fn(args);

console.log(curry(sum)(1, 2, 3) === 6);
console.log(curry(sum)(2, 2, 3, -2) === 5);
console.log(curry(sum)(1) === 1);

console.log(curry(div)(100, 2, 10) === 5);
console.log(curry(div)(0, 2, 10) === 0);
console.log(curry(div)(100, 2, 100) === 0.5);

