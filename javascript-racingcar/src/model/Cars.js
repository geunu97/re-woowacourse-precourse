const RandomNumberGenerator = require('../RandomNumberGenerator');

class Cars {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  tryMoving() {
    this.#cars.forEach((car) => {
      if (car.isMovable(RandomNumberGenerator.generate)) {
        car.Move();
      }
    });
  }
}

module.exports = Cars;
