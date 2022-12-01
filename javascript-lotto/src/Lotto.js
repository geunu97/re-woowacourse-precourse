class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLanks(matchingCounts) {
    const ranks = Array.from({ length: 5 }, () => 0);
    matchingCounts.forEach((matchingCount) => {
      const rank = this.getLank(matchingCount);
      if (rank === Number(rank)) {
        ranks[rank] += 1;
      }
    });
    return ranks;
  }

  getLank([winningCount, bonusCount]) {
    if (winningCount === 6) {
      return 0;
    }
    if (winningCount === 5 && bonusCount) {
      return 1;
    }
    if (winningCount === 5) {
      return 2;
    }
    if (winningCount === 4) {
      return 3;
    }
    if (winningCount === 3) {
      return 4;
    }
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
