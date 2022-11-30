const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #purchaseMoney;
  #LottoNumbers = [];

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  purchaseLottoTimes() {
    this.#LottoNumbers = Array.from({ length: this.#purchaseMoney / 1000 }, () =>
      this.purchaseLotto(),
    );
  }

  purchaseLotto() {
    const { generate, sort, convertType } = RandomUniqueNumbersGenerator;
    return convertType(sort(generate()));
  }

  getPurchaseMoney() {
    return this.#purchaseMoney;
  }

  getLottoNumbers() {
    return this.#LottoNumbers;
  }
}

module.exports = User;
