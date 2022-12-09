const Validator = require('./Validator');

const InputValidator = {
  functionCommand(command) {
    Validator.existingValue(command, ['1', '2', '3', 'Q']);
  },
};

module.exports = InputValidator;
