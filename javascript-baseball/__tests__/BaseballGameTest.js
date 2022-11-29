/* eslint-disable max-lines-per-function */
const BaseballGameModel = require('../src/model/BaseballGameModel');
const ComputerNumberMaker = require('../src/utils/ComputerNumberMaker');

const mockGenerator = (numbers) =>
  numbers.reduce((acc, currentNumber) => acc.mockReturnValueOnce(currentNumber), jest.fn());

describe('야구 게임 테스트', () => {
  test('1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 생성한다.', () => {
    const generateRandomNumber = mockGenerator([1, 2, 2, 3, 1, 4]);
    const computerNumber = ComputerNumberMaker.make(generateRandomNumber);

    expect(computerNumber).toEqual('123');
  });

  test('baseballGameModel 객체를 생성하여 컴퓨터의 수와 사용자의 수를 초기화한다.', () => {
    const baseballGameModel = new BaseballGameModel('382', '123');

    expect(baseballGameModel.getComputerNumbers()).toEqual('382');
    expect(baseballGameModel.getUserNumbers()).toEqual('123');
  });

  test('스트라이크 개수를 구한다.', () => {
    const baseballGameModel = new BaseballGameModel('932', '912');

    expect(baseballGameModel.getStrike()).toEqual(2);
  });

  test('볼 개수를 구한다.', () => {
    const baseballGameModel = new BaseballGameModel('621', '612');

    expect(baseballGameModel.getBall()).toEqual(2);
  });

  test('게임이 완료 되었는지 구한다.', () => {
    const baseballGameModel = new BaseballGameModel('132', '132');

    expect(baseballGameModel.isCompletion()).toBeTruthy();
  });
});
