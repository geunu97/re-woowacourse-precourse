const Lotto = require('../Lotto');
const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #LottoNumbers = [];

  purchaseLottoTimes(times) {
    this.#LottoNumbers = Array.from({ length: times }, () => this.purchaseLotto());
  }

  purchaseLotto() {
    const lotto = new Lotto(RandomUniqueNumbersGenerator.generate());
    return lotto.getNumbers();
  }

  getLottoNumbers() {
    return this.#LottoNumbers;
  }
}

module.exports = User;
