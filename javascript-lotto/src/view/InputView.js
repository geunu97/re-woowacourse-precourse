const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      if (Validator.purchaseMoney(money)) {
        callback(money);
      }
    });
  },

  readWinningNumbers(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningNumbers) => {
      if (Validator.winningNumbers(winningNumbers.split(','))) {
        callback(winningNumbers);
      }
    });
  },

  // }

  // readBonusNumber(){}
};

module.exports = InputView;
