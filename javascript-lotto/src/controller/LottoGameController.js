const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #user;

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
      //
    });
  }
}

module.exports = LottoGameController;
