// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const primes: object = {1:2, 2:3, 3:5, 4:7, 5:11, 6:13};

const findNthPrime = (n: number) => {
  if (n <= 0) {
    throw new Error('Not possible');
  }

  if (primes[n]) { return primes[n]; }

  for (let num = 15; Object.keys(primes).length < n; num += 2) {
    let isPrime:boolean = true;
    for (let i = 1; isPrime && i * i <= num; i++) {
      if (num % (primes[i]) === 0) {
        isPrime = false;
      }
    }
    if (isPrime && !primes.hasOwnProperty(num)) {
      const idx = Object.keys(primes).length + 1;
      primes[idx] = num;
    }
  }
  return primes[n];
}

findNthPrime(10001);
