// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (n: number) => {
  if (n < 2) { return false; }
  if (n < 4) { return true; }
  if (n % 2 === 0) { return false; }
  for (let i = 1; i * i <= n; i += 2) {
    if (n % i === 0 && i > 1) {
      return false;
    }
  }
  return true;
};

const sumPrimesLessThan = (n: number) => {
  let total:number = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i) === true) {
      total += i;
    }
  }
  return total;
};

// sumPrimesLessThan(2000000);
