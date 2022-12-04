const { Console } = require('@woowacourse/mission-utils');
const Exception = require('../utils/Exception');
const InputValidator = require('../utils/InputValidator');

const InputView = {
  readCars(callback) {
    Console.readLine(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      (inputData) => {
        const cars = inputData.split(',');
        if (Exception.isThrow(InputValidator.cars, cars)) {
          this.readCars(callback);
          return;
        }
        callback(cars);
      },
    );
  },

  readTryCount(callback) {
    Console.readLine('시도할 회수는 몇회인가요?\n', (tryCount) => {
      if (Exception.isThrow(InputValidator.tryCount, tryCount)) {
        this.readTryCount(callback);
        return;
      }
      callback(tryCount);
    });
  },
};

module.exports = InputView;
