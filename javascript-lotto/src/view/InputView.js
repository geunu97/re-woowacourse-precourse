const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      if (Validator.purchaseMoney(money)) {
        callback(money);
      }
    });
  },
};

module.exports = InputView;
