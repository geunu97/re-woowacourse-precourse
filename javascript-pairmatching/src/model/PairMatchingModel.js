const PairMatchingMaker = require('../utils/PairMatchingMaker');
const FileReader = require('../utils/FileReader');
const ShuffleGenerator = require('../utils/ShuffleGenerator');

class PairMatchingModel {
  #course;
  #level;
  #mission;
  #pairMatchingResult;

  constructor(course, level, mission) {
    this.#course = course;
    this.#level = level;
    this.#mission = mission;
  }

  generatePairMatchingResult(callback) {
    let src = 'src/resources/backend-crew.md';
    if (this.#course === '프론트엔드') {
      src = 'src/resources/frontend-crew.md';
    }
    FileReader.read(src, (crew) => {
      this.#pairMatchingResult = PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate);
      callback(this.#pairMatchingResult);
    });
  }

  getCourse() {
    return this.#course;
  }

  getLevel() {
    return this.#level;
  }

  getMission() {
    return this.#mission;
  }
}

module.exports = PairMatchingModel;
