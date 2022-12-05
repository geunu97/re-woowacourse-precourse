/* eslint-disable max-lines-per-function */
const Car = require('../src/model/Car');

const mockGenerator = (numbers) =>
  numbers.reduce((acc, currentNumber) => acc.mockReturnValueOnce(currentNumber), jest.fn());

describe('Car 클래스 테스트', () => {
  const car = new Car('pobi');

  test('임의의 수가 4이상일 때 true를 반환한다.', () => {
    const randomNumberGenerator = mockGenerator([4, 5, 6, 7, 8, 9]);
    const result = car.isMovable(randomNumberGenerator);

    expect(result).toBeTruthy();
  });

  test('임의의 수가 3이하일 때 false를 반환한다.', () => {
    const randomNumberGenerator = mockGenerator([1, 2, 3]);
    const result = car.isMovable(randomNumberGenerator);

    expect(result).toBeFalsy();
  });

  test('전진 시 position이 1증가한다.', () => {
    car.move();
    const result = car.getPosition();

    expect(result).toEqual(1);
  });
});
