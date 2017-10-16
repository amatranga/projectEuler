// Finds the maximum difference between two numbers (a, b)
// in an array where the index of a is less than 
// the index of b.

// const maxDifference = (ints: Array<number>) => {
//   let maxDiff: number = ints[1] - ints[0];
//   let min: number = ints[0];
//   ints.forEach(int => {
//     if (int > min) {
//       let diff = Math.abs(int - min);
//       if (diff > maxDiff) {
//         maxDiff = diff;
//       }
//     } else {
//       min = int;
//     }
//   });
//   return maxDiff;
// };


// Now with 50% more Beef!
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

const prices = [10, 7, 5, 8, 11, 9, 1];
maxDiffer(prices);
// => -10
// The greatest change in prices is between 11 and 1, which is a 
// loss of 10 (-10) moving from left to right.
