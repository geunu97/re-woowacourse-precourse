const { GAME_RULE, MACHING_COUNT } = require('./utils/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLanks(matchingCounts) {
    const ranks = Array.from({ length: GAME_RULE.NUMBERS_LENGTH - 1 }, () => 0);
    matchingCounts.forEach((matchingCount) => {
      const rank = this.getLank(matchingCount);
      if (rank === Number(rank)) {
        ranks[rank] += 1;
      }
    });
    return ranks;
  }

  getLank([winningCount, bonusCount]) {
    if (winningCount === MACHING_COUNT.FIRST_PLACE) {
      return 0;
    }
    if (winningCount === MACHING_COUNT.SECOND_PLACE && bonusCount) {
      return 1;
    }
    if (winningCount === MACHING_COUNT.THIRD_PLACE) {
      return 2;
    }
    if (winningCount === MACHING_COUNT.FOURTH_PLACE) {
      return 3;
    }
    if (winningCount === MACHING_COUNT.FIFTH_PLACE) {
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
    this.#numbers.slice(0, GAME_RULE.NUMBERS_LENGTH).forEach((winningNumber) => {
      if (userNumbers.includes(winningNumber)) {
        count += 1;
      }
    });
    return count;
  }

  matchBonusNumber(userNumbers) {
    if (userNumbers.includes(this.#numbers[GAME_RULE.NUMBERS_LENGTH])) {
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
