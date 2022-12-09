const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const PairMatchingModel = require('../model/PairMatchingModel');
const PairMatchingModels = require('../model/PairMatchingModels');

class PairMatchingController {
  #pairMatchingModels;

  constructor() {
    this.#pairMatchingModels = new PairMatchingModels();
  }

  start() {
    this.selectFunction();
  }

  selectFunction() {
    InputView.readFunctionCommand((command) => {
      if (command === '1') {
        this.makerPairMatching();
        OutputView.printPairMatching();
        return;
      }
    });
  }

  makerPairMatching() {
    InputView.readPairMatching(([course, level, mission]) => {
      this.#pairMatchingModels.setPairMatchingModels(new PairMatchingModel(course, level, mission));
      this.outputPairMatchingResult(course, level, mission);
    });
  }

  outputPairMatchingResult(course, level, mission) {
    this.#pairMatchingModels.getPairMatchingResult(course, level, mission, (pairMatchingResult) => {
      if (course === '프론트엔드') {
        OutputView.printFrontendPairMatchingResult(pairMatchingResult);
      }
      if (course === '백엔드') {
        OutputView.printBackendPairMatchingResult(pairMatchingResult);
      }
      this.selectFunction();
    });
  }
}

module.exports = PairMatchingController;
