const InputView = require('../view/InputView');
const User = require('../model/User');
const OutputView = require('../view/OutputView');

class LottoGameController {
  start() {
    InputView.readPurchaseMoney((purchaseMoney) => {
      const user = new User();
      user.purchaseLottoTimes(Number(purchaseMoney) / 1000);
      OutputView.printLottoNumbers(user.getLottoNumbers());
    });
  }
}

module.exports = LottoGameController;
