const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const PairMatchingModel = require('../model/PairMatchingModel');
const PairMatchingModels = require('../model/PairMatchingModels');

class PairMatchingController {
  #pairMatchingModels;
  #targetPairMatchingModel;

  constructor() {
    this.#pairMatchingModels = new PairMatchingModels();
  }

  start() {
    this.selectFunction();
  }

  selectFunction() {
    InputView.readFunctionCommand((command) => {
      if (command === '1' || command === '2') {
        OutputView.printPairMatching();
        this.inputPairMatchingInfo(command);
        return;
      }
    });
  }

  inputPairMatchingInfo(command) {
    InputView.readPairMatching(([course, level, mission]) => {
      this.setTargetPairMatchingModel(course, level, mission);
      if (command === '1') {
        this.pairMatching(course, level, mission);
        return;
      }
      this.searchResult(course);
    });
  }

  pairMatching(course, level, mission) {
    if (this.#targetPairMatchingModel) {
      this.selectRePairMatching(course);
      return;
    }
    this.#targetPairMatchingModel = new PairMatchingModel(course, level, mission);
    this.#pairMatchingModels.setPairMatchingModels(this.#targetPairMatchingModel);
    this.generatePairMatching(course);
  }

  searchResult(course) {
    this.outputResult(course, this.#targetPairMatchingModel.getPairMatchingResult());
  }

  outputResult(course, pairMatchingResult) {
    if (course === '프론트엔드') {
      OutputView.printFrontendPairMatchingResult(pairMatchingResult);
    }
    if (course === '백엔드') {
      OutputView.printBackendPairMatchingResult(pairMatchingResult);
    }
    this.selectFunction();
  }

  generatePairMatching(course) {
    this.#targetPairMatchingModel.generatePairMatching((pairMatchingResult) => {
      this.outputResult(course, pairMatchingResult);
      this.selectFunction();
    });
  }

  selectRePairMatching(course) {
    InputView.readReMatching((command) => {
      if (command === '아니오') {
        this.inputPairMatchingInfo('1');
        return;
      }
      this.generatePairMatching(course);
    });
  }

  setTargetPairMatchingModel(course, level, mission) {
    this.#targetPairMatchingModel = this.#pairMatchingModels.getPairMatchingModel(course, level, mission);
  }
}

module.exports = PairMatchingController;
