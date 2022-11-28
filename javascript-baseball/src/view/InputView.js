const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readUserNumbers(callback) {
    Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      if (!Validator.isUserNumbers(numbers)) {
        throw new Error('[ERROR] 1부터 9까지 서로 다른 3자리 수로 이루어져야 합니다.');
      }
      callback(numbers);
    });
  },

  readFinalCommand(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (command) => {
      if (!Validator.isFinalCommand(command)) {
        throw new Error('[ERROR] 1(재시작) 또는 2(종료)를 입력해야 합니다..');
      }
      callback(command);
    });
  },
};

module.exports = InputView;
