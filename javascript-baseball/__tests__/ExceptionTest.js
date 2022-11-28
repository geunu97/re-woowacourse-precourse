/* eslint-disable max-lines-per-function */
const Validator = require('../src/utils/Validator');

const runExceptionUserNumber = (userNumber, errorMessage) => {
  expect(() => {
    Validator.userNumber(userNumber);
  }).toThrow(errorMessage);
};

const runExceptionFinalCommand = (command, errorMessage) => {
  expect(() => {
    Validator.finalCommand(command);
  }).toThrow(errorMessage);
};

describe('입력 형식 예외 테스트', () => {
  test.each(['a', 'A', '!', '.', ' ', ''])(
    '사용자 수가 숫자가 아니면 예외가 발생한다.',
    (userNumber) => {
      runExceptionUserNumber(userNumber, '[ERROR] 숫자가 아닙니다.');
    },
  );
  test.each(['102', '120'])('사용자 수에 0이 포함되면 예외가 발생한다.', (userNumber) => {
    runExceptionUserNumber(userNumber, '[ERROR] 0이 포함되어 있으면 안됩니다.');
  });
  test.each(['191', '228', '933'])(
    '사용자 수에 중복된 수가 존재하면 예외가 발생한다.',
    (userNumber) => {
      runExceptionUserNumber(userNumber, '[ERROR] 중복된 수가 존재하면 안됩니다.');
    },
  );
  test.each(['23', '1', '8274'])('사용자 수의 길이가 3이 아니면 예외가 발생한다.', (userNumber) => {
    runExceptionUserNumber(userNumber, '[ERROR] 길이가 3이 아닙니다.');
  });

  test.each(['3', 'a', '', ' ', '0'])(
    '게임 재시작, 종료의 입력 형식이 1 또는 2가 아니면 예외가 발생한다.',
    (command) => {
      runExceptionFinalCommand(command, '[ERROR] 1(재시작) 또는 2(종료)를 입력해야 합니다.');
    },
  );
});
