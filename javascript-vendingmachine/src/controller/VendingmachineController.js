const InputView = require('../view/InputView');

class VendingmachineController {
  start() {
    InputView.readVendingmachineMoney((money) => {
      console.log(money);
    });
  }
}

module.exports = VendingmachineController;
