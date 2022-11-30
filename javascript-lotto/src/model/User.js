const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #LottoNumbers = [];

  purchaseLottoTimes(times) {
    this.#LottoNumbers = Array.from({ length: times }, () => this.purchaseLotto());
  }

  purchaseLotto() {
    const { generate, sort, convertType } = RandomUniqueNumbersGenerator;
    return convertType(sort(generate()));
  }

  getLottoNumbers() {
    return this.#LottoNumbers;
  }
}

module.exports = User;
