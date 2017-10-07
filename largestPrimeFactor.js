// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


const largestPrimeFactor = n => {
  const primeFactors = [];
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      n /= i;
      primeFactors.push(i);
    }
  }
  if (n > 2) {
    primeFactors.push(n);
  }
  return primeFactors.pop();
};
