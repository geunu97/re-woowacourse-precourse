const Lotto = require('../Lotto');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #user;
  #lotto;

  constructor(user) {
    this.#user = user;
  }

  start() {
    this.InputPurchaseMoney();
  }

  InputPurchaseMoney() {
    InputView.readPurchaseMoney((purchaseMoney) => {
      this.#user.purchaseLottoTimes(Number(purchaseMoney) / 1000);
      OutputView.printLottoNumbers(this.#user.getLottoNumbers());
      this.InputWinningNumbers();
    });
  }

  InputWinningNumbers() {
    InputView.readWinningNumbers((winningNumbers) => {
      this.#lotto = new Lotto(winningNumbers);
      this.InputBonusNumber();
    });
  }

  InputBonusNumber() {
    InputView.readBonusNumber((bonusNumber) => {
      InputValidator.bonusNumber(this.#lotto.getNumbers(), bonusNumber);
      this.#lotto.updateNumbers(bonusNumber);
      this.result();
    });
  }

  result() {
    const matchingCount = this.#lotto.getMatchingCount(this.#user.getLottoNumbers());
    const ranks = this.#lotto.getLanks(matchingCount);
    OutputView.printStatistics(ranks);
  }
}

module.exports = LottoGameController;
