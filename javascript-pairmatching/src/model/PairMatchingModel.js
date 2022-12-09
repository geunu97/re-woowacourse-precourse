const PairMatchingMaker = require('../utils/PairMatchingMaker');
const FileReader = require('../utils/FileReader');
const ShuffleGenerator = require('../utils/ShuffleGenerator');

class PairMatchingModel {
  #course;
  #level;
  #mission;

  constructor(course, level, mission) {
    this.#course = course;
    this.#level = level;
    this.#mission = mission;
  }

  getPairMatchingResult(callback) {
    if (this.#course === '프론트엔드') {
      FileReader.read('src/resources/frontend-crew.md', (crew) => {
        callback(PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate));
      });
      return;
    }
    FileReader.read('src/resources/backend-crew.md', (crew) => {
      callback(PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate));
    });
  }
}

module.exports = PairMatchingModel;
