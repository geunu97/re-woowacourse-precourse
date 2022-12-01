/* eslint-disable max-lines-per-function */
const InputValidator = require('../src/utils/InputValidator');

const runException = (validatorMethod, inputData) => {
  expect(() => {
    validatorMethod(inputData);
  }).toThrow();
};

describe('사용자 입력 형식 예외 발생 테스트', () => {
  test.each(['a', '@', '일', ' ', ''])(
    '구입 금액 형식은 숫자가 아니면 예외가 발생한다.',
    (purchaseMoney) => {
      runException(InputValidator.purchaseMoney, purchaseMoney);
    },
  );

  test.each(['1', '999', '1001'])(
    '구입 금액 형식은 1000원 단위가 아니면 예외가 발생한다.',
    (purchaseMoney) => {
      runException(InputValidator.purchaseMoney, purchaseMoney);
    },
  );

  test('당첨 번호 형식의 길이가 6이 아니면 예외가 발생한다.', () => {
    winningNumbers = ['1', '2', '3', '4', '5'];

    runException(InputValidator.winningNumbers, winningNumbers);
  });

  test('당첨 번호 형식은 중복된 숫자가 존재하면 예외가 발생한다.', () => {
    winningNumbers = ['1', '2', '3', '4', '5', '1'];

    runException(InputValidator.winningNumbers, winningNumbers);
  });

  test('당첨 번호 형식은 숫자가 아니면 예외가 발생한다.', () => {
    winningNumbers = ['a', '1', '2', '3', '4', '5'];

    runException(InputValidator.winningNumbers, winningNumbers);
  });

  test('당첨 번호 형식은 0이하의 숫자가 존재하면 예외가 발생한다.', () => {
    winningNumbers = ['0', '-1', '1', '2', '3', '4'];

    runException(InputValidator.winningNumbers, winningNumbers);
  });

  test('당첨 번호 형식은 46이상의 숫자가 존재하면 예외가 발생한다.', () => {
    winningNumbers = ['1', '2', '3', '4', '5', '46'];

    runException(InputValidator.winningNumbers, winningNumbers);
  });

  test.each(['a', '@', '일', ' ', ''])(
    '보너스 번호 형식은 숫자가 아니면 예외가 발생한다.',
    (bonusNumber) => {
      runException(InputValidator.bonusNumber, bonusNumber);
    },
  );

  test('보너스 번호 형식은 0이하의 숫자가 존재하면 예외가 발생한다.', () => {
    bonusNumber = '0';

    expect(() => {
      InputValidator.bonusNumber([], bonusNumber);
    }).toThrow();
  });

  test('보너스 번호 형식은 46이상의 숫자가 존재하면 예외가 발생한다.', () => {
    bonusNumber = '46';

    expect(() => {
      InputValidator.bonusNumber([], bonusNumber);
    }).toThrow();
  });

  test('보너스 번호는 당첨 번호와 중복되면 예외가 발생한다.', () => {
    winningNumbers = ['1', '2', '3', '4', '5', '6'];
    bonusNumber = '1';

    expect(() => {
      InputValidator.bonusNumber(winningNumbers, bonusNumber);
    }).toThrow();
  });
});
