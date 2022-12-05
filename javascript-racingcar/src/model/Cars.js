const RandomNumberGenerator = require('../RandomNumberGenerator');

class Cars {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
  }

  move() {
    this.#tryCount -= 1;
    this.#cars.forEach((car) => {
      if (car.isMovable(RandomNumberGenerator.generate)) {
        car.move();
      }
    });
  }

  getMaxPositionCount() {
    const positionCounts = [];
    this.#cars.forEach((car) => {
      positionCounts.push(car.getPosition());
    });
    return positionCounts.sort()[positionCounts.length - 1];
  }

  getWinner() {
    const maxPositionCount = this.getMaxPositionCount();
    const winner = [];
    this.#cars.forEach((car) => {
      if (car.getPosition() === maxPositionCount) {
        winner.push(car.getName());
      }
    });
    return winner;
  }

  isTryable() {
    return this.#tryCount;
  }

  getCars() {
    return this.#cars;
  }
}

module.exports = Cars;
