class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getMatchingCount(userAllNumbers) {
    const count = [];
    userAllNumbers.forEach((userNumbers) => {
      count.push([this.matchWinningNumbers(userNumbers), this.matchBonusNumber(userNumbers)]);
    });
    return count;
  }

  matchWinningNumbers(userNumbers) {
    let count = 0;
    this.#numbers.slice(0, 6).forEach((winningNumber) => {
      if (userNumbers.includes(winningNumber)) {
        count += 1;
      }
    });
    return count;
  }

  matchBonusNumber(userNumbers) {
    if (userNumbers.includes(this.#numbers[6])) {
      return 1;
    }
    return 0;
  }

  getNumbers() {
    return this.#numbers;
  }

  updateNumbers(bonusNumber) {
    this.#numbers = [...this.#numbers, bonusNumber];
  }
}

module.exports = Lotto;
