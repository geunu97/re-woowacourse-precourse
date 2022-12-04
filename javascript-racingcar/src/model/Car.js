class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  isMovable(randomNumberGenerator) {
    const randomNumber = randomNumberGenerator();
    console.log(randomNumber);
    return randomNumber >= 4;
  }

  Move() {
    this.#position += 1;
  }
}

module.exports = Car;
