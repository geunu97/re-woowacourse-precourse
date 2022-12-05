/* eslint-disable max-lines-per-function */
const Car = require('../src/model/Car');
const Cars = require('../src/model/Cars');

const makeCars = (carNames, tryCount) => {
  const carInstances = carNames.map((name) => new Car(name));
  return new Cars(carInstances, tryCount);
};

const mockGenerator = (numbers) =>
  numbers.reduce((acc, currentNumber) => acc.mockReturnValueOnce(currentNumber), jest.fn());

describe('Cars 클래스 테스트', () => {
  const carNames = ['pobi', 'woni', 'jun'];

  test('시도 횟수가 1이상이면 true를 반환한다.', () => {
    const tryCount = 1;
    const cars = makeCars(carNames, tryCount);

    expect(cars.isTryable()).toBeTruthy();
  });

  test('시도 횟수가 0이면 false를 반환한다.', () => {
    const tryCount = 0;
    const cars = makeCars(carNames, tryCount);

    expect(cars.isTryable()).toBeFalsy();
  });

  test('전진 시 시도횟수가 1씩 감소한다.', () => {
    const tryCount = 3;
    const cars = makeCars(carNames, tryCount);

    [2, 1, 0].forEach((count) => {
      cars.move();
      expect(cars.isTryable()).toEqual(count);
    });
  });

  test('전진한 값을 구한다.', () => {
    const tryCount = 1;
    const cars = makeCars(carNames, tryCount);

    cars.getCars().forEach((car) => {
      car.move();
    });

    expect(cars.getMaxPositionCount()).toEqual(1);
  });
});
