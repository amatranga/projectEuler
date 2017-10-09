// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumThenSq = (list: Array<number>) => {
  let sum = list.reduce((a,b) => a + b);
  return Math.pow(sum, 2);
};

const sqThenSum = (list: Array<number>) => {
  let sq = list.map(num => num * num);
  return sq.reduce((a,b) => a + b);
};

// const arr = [...Array(100).keys()].map(x => ++x);
// const sum = sumThenSq(arr);
// const sq = sqThenSum(arr);
// sum - sq;

const sumSqDiff = (n: number) => {
  const a: Array<number> = [...Array(n).keys()].map(x => ++x);
  const b: number = Math.pow(a.reduce((x,y) => x + y), 2);
  const c: number = a.map(n => n * n).reduce((x,y) => x + y);
  return b - c;
}

// sumSqDiff(100);
