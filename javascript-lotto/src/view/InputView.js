const { Console } = require('@woowacourse/mission-utils');
const InputValidator = require('../utils/InputValidator');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      InputValidator.purchaseMoney(money);
      callback(money);
    });
  },

  readWinningNumbers(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      const winningNumbers = numbers.split(',');
      InputValidator.winningNumbers(winningNumbers);
      callback(winningNumbers);
    });
  },

  readBonusNumber(callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      callback(bonusNumber);
    });
  },
};

module.exports = InputView;
