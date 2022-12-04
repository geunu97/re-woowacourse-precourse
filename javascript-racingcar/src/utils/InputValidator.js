const Validator = require('./Validator');

const InputValidator = {
  cars(cars) {
    cars.forEach((car) => {
      Validator.length(car, 5);
    });
  },
  tryCount(count) {
    Validator.type(count);
  },
};

module.exports = InputValidator;
