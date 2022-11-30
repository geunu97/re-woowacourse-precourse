const InputView = require('../view/InputView');

class LottoGameController {
  start() {
    InputView.readPurchaseMoney((money) => {
      console.log(money);
    });
  }
}

module.exports = LottoGameController;
