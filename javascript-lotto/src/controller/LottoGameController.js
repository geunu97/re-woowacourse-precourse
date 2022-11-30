const InputView = require('../view/InputView');
const User = require('../model/User');

class LottoGameController {
  start() {
    InputView.readPurchaseMoney((purchaseMoney) => {
      const user = new User();
      user.purchaseLottoTimes(Number(purchaseMoney) / 1000);
    });
  }
}

module.exports = LottoGameController;
