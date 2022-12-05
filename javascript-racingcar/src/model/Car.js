class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  isMovable(randomNumberGenerator) {
    const randomNumber = randomNumberGenerator();
    return randomNumber >= 4;
  }

  Move() {
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
