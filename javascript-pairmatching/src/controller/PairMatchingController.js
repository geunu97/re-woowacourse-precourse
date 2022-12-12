const PairMatchingGameModel = require('../model/PairMatchingGameModel');
const InputView = require('../view/InputView');

class PairMatchingController {
  #mainController;
  #pairMatchingGameModels;
  #targetModel;

  constructor(mainController, pairMatchingGameModels, targetModel) {
    this.#mainController = mainController;
    this.#pairMatchingGameModels = pairMatchingGameModels;
    this.#targetModel = targetModel;
  }

  isExisting(course) {
    if (this.#targetModel.getModel()) {
      this.selectRegenerate(course);
      return true;
    }
    return false;
  }

  makeModel(course, level, mission) {
    if (!this.isExisting(course)) {
      this.#pairMatchingGameModels.setModels(new PairMatchingGameModel(course, level, mission));
      this.#targetModel.setModel(course, level, mission);
      this.generate(course);
    }
  }

  generate(course) {
    this.#targetModel.getModel().generatePairMatching((pairMatchingResult) => {
      this.#mainController.outputResult(course, pairMatchingResult);
      this.#mainController.selectFunction();
    });
  }

  selectRegenerate(course) {
    InputView.readReMatching((command) => {
      if (command === '아니오') {
        this.#mainController.inputPairMatchingInfo('1');
        return;
      }
      this.generate(course);
    });
  }
}

module.exports = PairMatchingController;
