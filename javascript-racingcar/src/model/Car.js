class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  isMovable(randomNumberGenerator) {
    return randomNumberGenerator() >= 4;
  }

  move() {
    this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

module.exports = Car;
