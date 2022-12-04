const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../model/Car');
const Cars = require('../model/Cars');

class RacingcarController {
  #cars;

  start() {
    this.inputCars();
  }

  inputCars() {
    InputView.readCars((cars) => {
      const carInstances = cars.map((car) => new Car(car));
      this.makeCars(carInstances);
    });
  }

  makeCars(carInstances) {
    InputView.readTryCount((tryCount) => {
      this.#cars = new Cars(carInstances, Number(tryCount));
      this.move();
    });
  }

  move() {
    Console.print('\n실행 결과');
    while (this.#cars.isTryable()) {
      this.#cars.move();
      OutputView.printResult(this.#cars.getCars());
    }
    this.result();
  }

  result() {
    OutputView.printWinner(this.#cars.getWinner());
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = RacingcarController;
