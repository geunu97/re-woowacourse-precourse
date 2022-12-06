const VendingmachineCoinMaker = require('../VendingmachineCoinMaker');
const InputView = require('../view/InputView');
const RandomNumberInListGenerator = require('../RandomNumberInListGenerator');

class VendingmachineController {
  start() {
    InputView.readVendingmachineMoney((money) => {
      const result = VendingmachineCoinMaker.make(money, RandomNumberInListGenerator.generate);
      console.log(result);
    });
  }
}

module.exports = VendingmachineController;
