class BaseballGameModel {
  #computerNumbers;
  #userNumbers;

  constructor(computerNumbers, userNumbers) {
    console.log(computerNumbers);
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
    return this.getStrike() === 3;
  }

  setUserNumbers(numbers) {
    this.#userNumbers = numbers;
  }
}

module.exports = BaseballGameModel;
