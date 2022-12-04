const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../model/Car');
const { Console } = require('@woowacourse/mission-utils');
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
    //종료
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
}

module.exports = RacingcarController;
