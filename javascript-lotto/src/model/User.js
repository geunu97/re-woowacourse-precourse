const Lotto = require('../Lotto');
const RandomUniqueNumbersGenerator = require('../RandomUniqueNumbersGenerator');

class User {
  #LottoNumbers = [];

  purchaseLottoTimes(times) {
    this.#LottoNumbers = Array.from({ length: times }, () => this.purchaseLotto());
    console.log(this.#LottoNumbers);
  }

  purchaseLotto() {
    const lotto = new Lotto(RandomUniqueNumbersGenerator.generate());
    return lotto.getNumbers();
  }
}

module.exports = User;
