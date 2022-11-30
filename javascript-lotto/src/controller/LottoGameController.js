const Lotto = require('../Lotto');
const User = require('../model/User');
const ProfitCalculator = require('../ProfitCalculator');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #user;
  #lotto;

  start() {
    this.InputPurchaseMoney();
  }

  InputPurchaseMoney() {
    InputView.readPurchaseMoney((purchaseMoney) => {
      this.#user = new User(Number(purchaseMoney));
      this.#user.purchaseLottoTimes();
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
      this.resultRank();
    });
  }

  resultRank() {
    const matchingCount = this.#lotto.getMatchingCount(this.#user.getLottoNumbers());
    const ranks = this.#lotto.getLanks(matchingCount);
    OutputView.printStatistics(ranks);
    this.resultProfitRate(ranks);
  }

  resultProfitRate(ranks) {
    const profit = ProfitCalculator.calculate(ranks);
    const profitRate = ProfitCalculator.calculateRate(this.#user.getPurchaseMoney(), profit);
    OutputView.printProfitRate(profitRate);
  }
}

module.exports = LottoGameController;
