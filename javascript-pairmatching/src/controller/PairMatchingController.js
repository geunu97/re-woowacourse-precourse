const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const PairMatchingModel = require('../model/PairMatchingModel');

class PairMatchingController {
  #pairMatchingModel;

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
      this.#pairMatchingModel = new PairMatchingModel(course, level, mission);
      this.outputPairMatchingResult(course);
    });
  }

  outputPairMatchingResult(course) {
    this.#pairMatchingModel.getPairMatchingResult((pairMatchingResult) => {
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
