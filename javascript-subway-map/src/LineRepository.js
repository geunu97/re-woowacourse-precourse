class LineRepository {
  #lines = [];

  addLine(line) {
    this.#lines.push(line);
  }

  deleteLine(name) {
    return this.#lines.filter((line) => line !== name);
  }
}

module.exports = LineRepository;
