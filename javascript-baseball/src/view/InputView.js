const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readUserNumbers(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      if (Validator.userNumber(numbers)) {
        callback(numbers);
      }
    });
  },

  readFinalCommand(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (command) => {
      if (Validator.finalCommand(command)) {
        callback(command);
      }
    });
  },
};

module.exports = InputView;
