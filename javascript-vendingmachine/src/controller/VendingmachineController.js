const VendingmachineCoinMaker = require('../VendingmachineCoinMaker');
const InputView = require('../view/InputView');
const RandomNumberInListGenerator = require('../RandomNumberInListGenerator');
const Coin = require('../model/Coin');
const OutputView = require('../view/OutputView');

class VendingmachineController {
  #coin;

  start() {
    InputView.readVendingmachineMoney((money) => {
      const vendingmachineCoins = VendingmachineCoinMaker.make(
        money,
        RandomNumberInListGenerator.generate,
      );
      this.#coin = new Coin(vendingmachineCoins);
      OutputView.printVendingmachineCoin(this.#coin.getCountingCoins());
      this.asd();
    });
  }

  asd() {
    InputView.readProducts((products) => {
      this.aaa();
    });
  }

  aaa() {
    InputView.readUserMoney((money) => {
      //
    });
  }
}

module.exports = VendingmachineController;
