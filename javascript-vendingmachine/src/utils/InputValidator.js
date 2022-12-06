const Validator = require('./Validator');

const InputValidator = {
  vendingmachineMoney(money) {
    Validator.type(money);
    Validator.unit(money, 10);
  },
};

module.exports = InputValidator;
