const {
  ERROR_MESSAGE_USER_NUMBERS,
  ERROR_MESSAGE_FINAL_COMMAND,
  COMMAND,
  GAME_RULE,
} = require('./Constant');

const Validator = {
  userNumber(numbers) {
    if (!Number(numbers)) {
      throw new Error(ERROR_MESSAGE_USER_NUMBERS.TYPE);
    }
    if (numbers.includes('0')) {
      throw new Error(ERROR_MESSAGE_USER_NUMBERS.INCLUDE_ZERO);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE_USER_NUMBERS.DUPLICATE);
    }
    if (numbers.length !== GAME_RULE.LENGTH) {
      throw new Error(ERROR_MESSAGE_USER_NUMBERS.LENGTH);
    }
    return true;
  },

  finalCommand(command) {
    if (command !== COMMAND.REPLAY && command !== COMMAND.END) {
      throw new Error(ERROR_MESSAGE_FINAL_COMMAND.COMMAND);
    }
    return true;
  },
};

module.exports = Validator;
