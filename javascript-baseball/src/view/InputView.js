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
};

module.exports = InputView;
