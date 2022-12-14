const { GAME_RULE } = require('../utils/Constant');

class BaseballGameModel {
  #computerNumbers;
  #userNumbers;

  constructor(computerNumbers, userNumbers) {
    this.#computerNumbers = computerNumbers;
    this.#userNumbers = userNumbers;
  }

  getStrike() {
    let strike = 0;
    this.#computerNumbers.split('').forEach((computerNumber, index) => {
      if (computerNumber === this.#userNumbers[index]) {
        strike += 1;
      }
    });
    return strike;
  }

  getBall() {
    let matchCount = 0;
    this.#computerNumbers.split('').forEach((computerNumber) => {
      if (this.#userNumbers.includes(computerNumber)) {
        matchCount += 1;
      }
    });
    return matchCount - this.getStrike();
  }

  isCompletion() {
    return this.getStrike() === GAME_RULE.COMPLETE_STRIKE_COUNT;
  }

  setUserNumbers(numbers) {
    this.#userNumbers = numbers;
  }

  getUserNumbers() {
    return this.#userNumbers;
  }

  getComputerNumbers() {
    return this.#computerNumbers;
  }
}

module.exports = BaseballGameModel;
