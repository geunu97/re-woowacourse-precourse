const InputView = require('../view/InputView');
const Car = require('../model/Car');
const Cars = require('../model/Cars');

class RacingcarController {
  #cars;

  start() {
    InputView.readCars((cars) => {
      const carInstances = cars.map((car) => new Car(car));
      this.#cars = new Cars(carInstances);
      this.go();
    });
  }

  go() {
    this.#cars.tryMoving();
  }

  tryCount() {
    InputView.readTryCount((tryCount) => {
      console.log(tryCount);
    });
  }
}

module.exports = RacingcarController;
