const { Console } = require('@woowacourse/mission-utils');
const PairMatchingMaker = require('../utils/PairMatchingMaker');
const FileReader = require('../utils/FileReader');
const ShuffleGenerator = require('../utils/ShuffleGenerator');
const Results = require('./Results');
const Exception = require('../utils/Exception');

class PairMatchingGameModel {
  #course;
  #level;
  #mission;
  #result;

  constructor(course, level, mission) {
    this.#course = course;
    this.#level = level;
    this.#mission = mission;
    this.#result = new Results();
  }

  generatePairMatching(callback) {
    FileReader.read(this.getFileSrc(), (crew) => {
      let count = 0;
      while (true) {
        const result = PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate);
        if (!this.#result.isExistingResult(result, this.#level)) {
          this.#result.setCurrentResult(result);
          this.#result.setResults(this.#level);
          callback(this.#result.getCurrentResult());
          break;
        }
      }
      if (count > 3) {
        Console.print('[ERROR] 매칭에 실패하였습니다.');
        Exception.throw('[ERROR] 매칭에 실패하였습니다.');
      }
    });
  }

  getFileSrc() {
    if (this.#course === '프론트엔드') {
      return 'src/resources/frontend-crew.md';
    }
    return 'src/resources/backend-crew.md';
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

  getResult() {
    return this.#result;
  }
}

module.exports = PairMatchingGameModel;
