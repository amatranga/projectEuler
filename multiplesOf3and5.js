// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const fizBuzz = (max, _arr) => {
  _arr = [];
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      _arr.push(i);
    }
  }
  return arr;
};

const reduce = (arr) => {
  return arr.reduce((a,b) => a + b);
};

// reduce(fizBuzz(1000));


// Because it has to be golfed...
const golf = (n) => {
  return Array(n).fill().map((e,i) => (((i + 1) % 3 === 0 || (i + 1) % 5 === 0) && (i + 1 !== N)) ? i + 1 : 0).reduce((a,b) => a + b);
};

// golf(1000);
