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
      if (command === '1') {
        OutputView.printPairMatching();
        this.inputPairMatching();
        return;
      }
    });
  }

  inputPairMatching() {
    InputView.readPairMatching(([course, level, mission]) => {
      if (this.#pairMatchingModels.isExistingPairMatchingModel(course, level, mission)) {
        this.inputRePairMatchingCommand(course);
        return;
      }
      this.#targetPairMatchingModel = new PairMatchingModel(course, level, mission);
      this.#pairMatchingModels.setPairMatchingModels(this.#targetPairMatchingModel);
      this.generatePairMatching(course);
    });
  }

  generatePairMatching(course) {
    this.#targetPairMatchingModel.generatePairMatching((pairMatchingResult) => {
      if (course === '프론트엔드') {
        OutputView.printFrontendPairMatchingResult(pairMatchingResult);
      }
      if (course === '백엔드') {
        OutputView.printBackendPairMatchingResult(pairMatchingResult);
      }
      this.selectFunction();
    });
  }

  inputRePairMatchingCommand(course) {
    InputView.readReMatching((command) => {
      if (command === '아니오') {
        this.inputPairMatching();
        return;
      }
      this.generatePairMatching(course);
    });
  }
}

module.exports = PairMatchingController;
