const Validator = require('./Validator');

const InputValidator = {
  cars(cars) {
    cars.forEach((car) => {
      Validator.length(car, 5);
    });
  },
};

module.exports = InputValidator;
