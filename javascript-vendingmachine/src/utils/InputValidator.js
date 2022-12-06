const Validator = require('./Validator');

const InputValidator = {
  vendingmachineMoney(money) {
    Validator.type(money);
    Validator.unit(money, 10);
  },

  products(products) {
    Validator.lengthToBeGreaterThan(products, 1);
    products.forEach((product) => {
      const [name, price, quantity] = product;

      Validator.lengthToBeEqual(product, 3);
      Validator.blank(name);
      Validator.type(price);
      Validator.unit(price, 10);
      Validator.range(price);
      Validator.type(quantity);
    });
  },

  userMoney(money) {
    Validator.type(money);
  },
};

module.exports = InputValidator;
