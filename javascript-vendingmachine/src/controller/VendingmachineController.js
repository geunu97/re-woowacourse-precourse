const VendingmachineCoinMaker = require('../VendingmachineCoinMaker');
const InputView = require('../view/InputView');
const RandomNumberInListGenerator = require('../RandomNumberInListGenerator');
const Coin = require('../model/Coin');
const OutputView = require('../view/OutputView');

class VendingmachineController {
  #coin;

  start() {
    this.makeVendingmachine();
  }

  makeVendingmachine() {
    InputView.readVendingmachineMoney((money) => {
      const vendingmachineCoins = VendingmachineCoinMaker.make(
        money,
        RandomNumberInListGenerator.generate,
      );
      this.#coin = new Coin(vendingmachineCoins);
      OutputView.printVendingmachineCoin(this.#coin.getCountingCoins());
      this.inputProducts();
    });
  }

  inputProducts() {
    InputView.readProducts((products) => {
      this.inputUserMoney();
    });
  }

  inputUserMoney() {
    InputView.readUserMoney((money) => {
      //
    });
  }
}

module.exports = VendingmachineController;
