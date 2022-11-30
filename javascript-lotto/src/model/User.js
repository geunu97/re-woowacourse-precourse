const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #LottoNumbers = [];

  purchaseLottoTimes(times) {
    this.#LottoNumbers = Array.from({ length: times }, () => this.purchaseLotto());
  }

  purchaseLotto() {
    return this.sortNumbers(RandomUniqueNumbersGenerator.generate());
  }

  sortNumbers(numbers) {
    return numbers.sort((prevNumber, nextNumber) => {
      if (prevNumber > nextNumber) {
        return 1;
      }
      return -1;
    });
  }

  getLottoNumbers() {
    return this.#LottoNumbers;
  }
}

module.exports = User;
