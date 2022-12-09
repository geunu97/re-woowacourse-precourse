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
        this.inputPairMatching(command);
        return;
      }
    });
  }

  inputPairMatching(command) {
    InputView.readPairMatching(([course, level, mission]) => {
      this.#targetPairMatchingModel = this.#pairMatchingModels.getPairMatchingModel(course, level, mission);
      if (command === '1') {
        this.pairMatching(course, level, mission);
        return;
      }
      this.searchPairMatchingResult(course, level, mission);
    });
  }

  pairMatching(course, level, mission) {
    if (this.#targetPairMatchingModel) {
      this.inputRePairMatchingCommand(course);
      return;
    }
    this.#targetPairMatchingModel = new PairMatchingModel(course, level, mission);
    this.#pairMatchingModels.setPairMatchingModels(this.#targetPairMatchingModel);
    this.generatePairMatching(course);
  }

  searchPairMatchingResult(course, level, mission) {
    this.#targetPairMatchingModel = this.#pairMatchingModels.getPairMatchingModel(course, level, mission);
    this.outputPairMatchingResult(course, this.#targetPairMatchingModel.getPairMatchingResult());
  }

  outputPairMatchingResult(course, pairMatchingResult) {
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
      this.outputPairMatchingResult(course, pairMatchingResult);
      this.selectFunction();
    });
  }

  inputRePairMatchingCommand(course) {
    InputView.readReMatching((command) => {
      if (command === '아니오') {
        this.inputPairMatching('1');
        return;
      }
      this.generatePairMatching(course);
    });
  }
}

module.exports = PairMatchingController;
