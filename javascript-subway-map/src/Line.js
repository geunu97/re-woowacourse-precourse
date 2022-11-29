class Line {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  // 추가 기능 구현
}

module.exports = Line;
