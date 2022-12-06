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
};

module.exports = InputView;
