/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/


const pythagorianTripleBrute = (t:number) => {
  for (let a:number = 1; a < t / 3; a++) {
    for (let b:number = a; b < t / 2; b++) {
      let c:number = t - a - b;
      if (Math.pow(a, b) + Math.pow(b, 2) === Math.pow(c, 2)) {
        let found:any = {a:a, b:b, c:c, sum: a * b * c};
        return found;
      }
    }
  }
  return null;
};

pythagorianTripleBrute(1000);
