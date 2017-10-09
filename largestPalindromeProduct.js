// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (n) => {
  return n.toString().split('').reverse().join('') === n.toString();
};

const largestPalindrome = () => {
  let largest = 0;
  for (let i = 900; i < 1000; i++) {
    for (let j = i; j < 1000; j++) {
      if (isPalindrome(i * j) && i * j > largest) {
        largest = i * j;
      }
    }
  }
  return largest;
};
