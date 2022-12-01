const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/Constant');
const InputValidator = require('../utils/InputValidator');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine(INPUT_MESSAGE.PURCHASE_MONEY, (money) => {
      InputValidator.purchaseMoney(money);
      callback(money);
    });
  },

  readWinningNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBERS, (numbers) => {
      const winningNumbers = numbers.split(',');
      InputValidator.winningNumbers(winningNumbers);
      callback(winningNumbers);
    });
  },

  readBonusNumber(callback) {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      callback(bonusNumber);
    });
  },
};

module.exports = InputView;
