const Validator = require('./Validator');

const InputValidator = {
  purchaseMoney(money) {
    Validator.type(money);
    Validator.unit(money, 1000);
  },

  winningNumbers(numbers) {
    Validator.length(numbers, 6);
    Validator.duplicate(numbers);
    numbers.forEach((number) => {
      Validator.type(number);
      Validator.range(number);
    });
  },

  bonusNumber(number) {},
};

module.exports = InputValidator;
