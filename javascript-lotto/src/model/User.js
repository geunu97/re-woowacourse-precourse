const Lotto = require('../Lotto');
const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #LottoNumbers = [];

  purchaseLottoTimes(times) {
    this.#LottoNumbers = Array.from({ length: times }, () => this.purchaseLotto());
  }

  purchaseLotto() {
    const lotto = new Lotto(RandomUniqueNumbersGenerator.generate());
    return this.sortNumbers(lotto.getNumbers());
  }

  getLottoNumbers() {
    return this.#LottoNumbers;
  }

  sortNumbers(numbers) {
    return numbers.sort((prevNumber, nextNumber) => {
      if (prevNumber > nextNumber) {
        return 1;
      }
      return -1;
    });
  }
}

module.exports = User;
