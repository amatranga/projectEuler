// Finds the maximum difference between two numbers (a, b)
// in an array where the index of a is less than 
// the index of b.


// Not optimized solution
const maxDiffer = (nums: Array<number>) => {
  let maxDifference: number = 0;
  nums.forEach((num:number) => {
    nums.forEach((nmr:number) => {
      let diff:number = 0;
      if (Math.abs(nmr - num) > Math.abs(diff)) {
        diff = nmr - num;
        if (Math.abs(diff) >  Math.abs(maxDifference)) {
          maxDifference = diff;
        }
      }
    });
  });
  return maxDifference;
}

// Slight optimization
const maxDifference = (nums: Array<number>) => {
  let maxDiff: number = 0;
  nums.forEach((num: number, i: number) => {
    for (let j = i; j < nums.length; j++) {
      let diff: number = 0;
      if (Math.abs(nums[j] - num) > Math.abs(diff)) {
        diff = nums[j] - num;
        if (Math.abs(diff) > Math.abs(maxDiff)) {
          maxDiff = diff;
        }
      }
    }
  });
  return maxDiff;
}

const prices: Array<number> = [10, 7, 5, 8, 11, 9, 1];
maxDiffer(prices);
// => -10
// The greatest change in prices is between 11 and 1, which is a 
// loss of 10 (-10) moving from left to right.
