const { Console } = require('@woowacourse/mission-utils');
const Exception = require('../utils/Exception');
const InputValidator = require('../utils/InputValidator');

const InputView = {
  readFunctionCommand(callback) {
    Console.readLine(
      '기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
      (command) => {
        if (Exception.isThrow(InputValidator.functionCommand, command)) {
          this.readFunctionCommand(callback);
          return;
        }
        callback(command);
      },
    );
  },
};

module.exports = InputView;
