class Coin {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  count() {
    const count = Array.from({ length: 4 }, () => 0);
    [500, 100, 50, 10].forEach((coin, index) => {
      this.#amount.forEach((amount) => {
        if (amount === coin) {
          count[index] += 1;
        }
      });
    });
    return count;
  }

  // 추가 기능 구현
}

module.exports = Coin;
