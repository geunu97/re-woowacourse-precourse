const Validator = require('./Validator');

const InputValidator = {
  cars(cars) {
    Validator.duplicate(cars);
    Validator.lengthToBeGreaterThan(cars, 1);
    cars.forEach((car) => {
      Validator.lengthToBeLessThan(car, 5);
      Validator.blank(car);
    });
  },

  tryCount(count) {
    Validator.type(count);
  },
};

module.exports = InputValidator;
