const VendingmachineCoinMaker = require('../VendingmachineCoinMaker');
const InputView = require('../view/InputView');
const RandomNumberInListGenerator = require('../RandomNumberInListGenerator');
const Coin = require('../model/Coin');
const OutputView = require('../view/OutputView');
const Product = require('../model/Product');
const Products = require('../model/Products');
const User = require('../model/User');

class VendingmachineController {
  #coin;
  #products;
  #user;

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
      this.#products = new Products(productInstances);
      this.inputUserMoney();
    });
  }

  inputUserMoney() {
    InputView.readUserMoney((money) => {
      this.#user = new User(money);
    });
  }
}

module.exports = VendingmachineController;
