const { Console } = require('@woowacourse/mission-utils');
const Exception = require('../utils/Exception');
const InputValidator = require('../utils/InputValidator');

const InputView = {
  readVendingmachineMoney(callback) {
    Console.readLine('자판기가 보유하고 있는 금액을 입력해 주세요.\n', (money) => {
      if (Exception.isThrow(InputValidator.vendingmachineMoney, money)) {
        this.readVendingmachineMoney(callback);
        return;
      }
      callback(money);
    });
  },

  readProducts(callback) {
    Console.readLine('\n상품명과 가격, 수량을 입력해 주세요.\n', (inputData) => {
      const products = [];
      inputData.split(';').forEach((product) => {
        products.push(product.slice(1, -1).split(','));
      });

      if (Exception.isThrow(InputValidator.products, products)) {
        this.readProducts(callback);
        return;
      }
      callback(products);
    });
  },

  readUserMoney(callback) {
    Console.readLine('\n투입 금액을 입력해 주세요.\n', (money) => {
      if (Exception.isThrow(InputValidator.userMoney, money)) {
        this.readUserMoney(callback);
        return;
      }
      callback(money);
    });
  },
};

module.exports = InputView;
