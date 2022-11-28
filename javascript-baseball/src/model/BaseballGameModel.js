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
}

module.exports = BaseballGameModel;
