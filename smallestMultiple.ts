// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// 
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const gcd = (a: number, b: number) => {
  return !b ? a : gcd(b, a % b);
};

const lcm = (a: number, b: number) => {
  return (a * b) / gcd(a, b);
};

const range = (min: number, max: number) => {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

const lcmRange = (min: number, max: number) => {
  let multiple: number = min;
  range(min, max).forEach(n => {
    multiple = lcm(multiple, n);
  });
  return multiple;
};
