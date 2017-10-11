// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

const coinSums = (t: number) => {
  const coins: Array<number> = [1, 2, 5, 10, 20, 50, 100, 200];
  let count: number = 0;

  const changer = (idx: number, value: number) => {
    let cur: number = coins[idx];
    if (idx === 0) {
      if (value % cur === 0) {
        count++;
      }
      return;
    }
    while (value >= 0) {
      changer(idx - 1, value);
      value -= cur;
    }
  };
  changer(coins.length - 1, t);
  return count;
};

// coinSums(200);
