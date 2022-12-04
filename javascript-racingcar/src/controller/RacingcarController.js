const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../model/Car');
const RandomNumberGenerator = require('../RandomNumberGenerator');

class RacingcarController {
  #cars;
  #tryCount;

  start() {
    this.inputCars();
  }

  inputCars() {
    InputView.readCars((cars) => {
      this.#cars = cars.map((car) => new Car(car));
      this.inputTryCount();
    });
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      this.#tryCount = Number(tryCount);
      this.checkTryCount();
    });
  }

  checkTryCount() {
    Console.print('\n실행 결과');
    while (this.#tryCount) {
      this.move();
      this.result();
      this.#tryCount -= 1;
    }
    this.winner();
    this.end();
  }

  move() {
    this.#cars.forEach((car) => {
      if (car.isMovable(RandomNumberGenerator.generate)) {
        car.Move();
      }
    });
  }

  result() {
    this.#cars.forEach((car) => {
      OutputView.printResult(car.getState());
    });
    Console.print('');
  }

  winner() {
    const cars = [];
    const positions = [];
    this.#cars.forEach((car) => {
      const { name, position } = car.getState();
      cars.push([name, position]);
      positions.push(position);
    });
    const result = [];
    const maxPosition = positions.sort()[positions.length - 1];
    cars.forEach(([name, position]) => {
      if (position === maxPosition) {
        result.push(name);
      }
    });
    OutputView.printWinner(result);
  }

  end() {
    Console.close();
  }
}

module.exports = RacingcarController;
