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
}

module.exports = BaseballGameModel;
