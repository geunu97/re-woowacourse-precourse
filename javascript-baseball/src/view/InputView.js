const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/Constant');
const Validator = require('../utils/Validator');

const InputView = {
  readUserNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.USER_NUMBERS, (numbers) => {
      if (Validator.userNumber(numbers)) {
        callback(numbers);
      }
    });
  },

  readFinalCommand(callback) {
    Console.readLine(INPUT_MESSAGE.FINAL_COMMAND, (command) => {
      if (Validator.finalCommand(command)) {
        callback(command);
      }
    });
  },
};

module.exports = InputView;
