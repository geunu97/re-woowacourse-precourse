const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const PairMatchingModel = require('../model/PairMatchingModel');

class PairMatchingController {
  #pairMatchingModel;

  start() {
    InputView.readFunctionCommand((command) => {
      if (command === '1') {
        this.makerPairMatching();
        return;
      }
    });
  }

  makerPairMatching() {
    OutputView.printPairMatching();
    InputView.readPairMatching(([course, level, mission]) => {
      this.#pairMatchingModel = new PairMatchingModel(course, level, mission);
      this.outputPairMatchingResult(course);
    });
  }

  outputPairMatchingResult(course) {
    this.#pairMatchingModel.getPairMatchingResult((pairMatchingResult) => {
      if (course === '프론트엔드') {
        OutputView.printFrontendPairMatchingResult(pairMatchingResult);
        return;
      }
      OutputView.printBackendPairMatchingResult(pairMatchingResult);
    });
  }
}

module.exports = PairMatchingController;
