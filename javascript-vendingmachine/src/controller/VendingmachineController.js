const VendingmachineCoinMaker = require('../VendingmachineCoinMaker');
const InputView = require('../view/InputView');
const RandomNumberInListGenerator = require('../RandomNumberInListGenerator');
const Coin = require('../model/Coin');
const OutputView = require('../view/OutputView');
const Product = require('../model/Product');
const Vendingmachine = require('../model/Vendingmachine');

class VendingmachineController {
  #coin;
  #vendingmachine;

  start() {
    this.makeCoins();
  }

  makeCoins() {
    InputView.readVendingmachineMoney((money) => {
      const vendingmachineCoins = VendingmachineCoinMaker.make(
        money,
        RandomNumberInListGenerator.generate,
      );
      this.#coin = new Coin(vendingmachineCoins);
      OutputView.printVendingmachineCoin(this.#coin.getCountingCoins());
      this.makeProducts();
    });
  }

  makeProducts() {
    InputView.readProducts((products) => {
      const productInstances = products.map((product) => new Product(product));
      this.makeVendingmachine(productInstances);
    });
  }

  makeVendingmachine(productInstances) {
    InputView.readUserMoney((userMoney) => {
      this.#vendingmachine = new Vendingmachine(userMoney, productInstances);
      this.availablePurchase();
    });
  }

  availablePurchase() {
    OutputView.printRemainingMoney(this.#vendingmachine.getUserMoney());
    if (this.#vendingmachine.availablePurchase() && !this.#vendingmachine.isSoldOut()) {
      this.purchase();
      return;
    }
    console.log('잔돈');
  }

  purchase() {
    InputView.readPurchaseProduct((product) => {
      this.#vendingmachine.purchase(product);
      this.availablePurchase();
    });
  }
}

module.exports = VendingmachineController;
