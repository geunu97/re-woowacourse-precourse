const { GAME_RULE } = require('./Constant');
const Validator = require('./Validator');

const InputValidator = {
  purchaseMoney(money) {
    Validator.type(money);
    Validator.unit(money, GAME_RULE.MONEY_UNIT);
  },

  winningNumbers(numbers) {
    Validator.length(numbers, GAME_RULE.NUMBERS_LENGTH);
    Validator.duplicate(numbers);
    numbers.forEach((number) => {
      Validator.type(number);
      Validator.range(number);
    });
  },

  bonusNumber(winningNumbers, bonusNumber) {
    Validator.type(bonusNumber);
    Validator.range(bonusNumber);
    Validator.duplicate([...winningNumbers, bonusNumber]);
  },
};

module.exports = InputValidator;
