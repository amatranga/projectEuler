// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

// [LARGE 1000 DIGIT NUMBER HERE]

// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
// What is the value of this product?

const makeArr = (n: string) => {
  return n.split('').map(x => Number(x));
};

const largestProductInSeries = (count: number, numArr: Array<number>) => {
  let max = -1;
  for (let i = 0; i <= numArr.length - count; i++) {
    let cur = numArr.slice(i, i + count).reduce((a,b) => a * b);
    if (cur > max) {
      max = cur;
    }
  }
  return max;
};

largestProductInSeries(13, [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]);
