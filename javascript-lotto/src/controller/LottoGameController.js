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
    InputView.readPurchaseMoney((purchaseMoney) => {
      this.#user.purchaseLottoTimes(Number(purchaseMoney) / 1000);
      OutputView.printLottoNumbers(this.#user.getLottoNumbers());
      this.winningNumbers();
    });
  }

  winningNumbers() {
    InputView.readWinningNumbers((winningNumbers) => {
      this.#lotto = new Lotto(winningNumbers);
      this.bonusNumber();
    });
  }

  bonusNumber() {
    InputView.readBonusNumber((bonusNumber) => {
      InputValidator.bonusNumber(this.#lotto.getNumbers(), bonusNumber);

      //
    });
  }
}

module.exports = LottoGameController;
