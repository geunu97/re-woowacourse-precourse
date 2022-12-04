const { Console } = require('@woowacourse/mission-utils');

const Exception = {
  isThrow(validator, inputData) {
    try {
      validator(inputData);
      return false;
    } catch (error) {
      Console.print(error);
      return true;
    }
  },

  throw(message) {
    throw new Error(message);
  },
};

module.exports = Exception;
