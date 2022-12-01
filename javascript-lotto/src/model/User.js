const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');
const { GAME_RULE } = require('../utils/Constant');

class User {
  #purchaseMoney;
  #LottoNumbers = [];

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  purchaseLottoTimes() {
    this.#LottoNumbers = Array.from({ length: this.#purchaseMoney / GAME_RULE.MONEY_UNIT }, () =>
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
