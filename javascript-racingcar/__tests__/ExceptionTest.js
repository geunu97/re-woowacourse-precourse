/* eslint-disable max-lines-per-function */
const InputValidator = require('../src/utils/InputValidator');

const runException = (validator, inputData) => {
  expect(() => {
    validator(inputData);
  }).toThrow('[ERROR]');
};

describe('사용자 입력 예외 테스트', () => {
  test('경주할 자동차 이름이 중복될 시 예외가 발생한다.', () => {
    runException(InputValidator.cars, 'pobi,pobi');
  });

  test('경주할 자동차 이름이 없을 때 예외가 발생한다.', () => {
    runException(InputValidator.cars, '');
  });

  test('경주할 자동차 이름이 6자 이상일 때 예외가 발생한다.', () => {
    runException(InputValidator.cars, 'javascript');
  });

  test('시도 횟수가 숫자가 아닐 때 예외가 발생한다.', () => {
    runException(InputValidator.tryCount, 'a');
  });
});
