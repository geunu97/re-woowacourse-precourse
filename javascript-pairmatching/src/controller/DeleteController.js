const OutputView = require('../view/OutputView');

class DeleteController {
  #mainController;
  #pairMatchingModels;

  constructor(mainController, pairMatchingModels) {
    this.#mainController = mainController;
    this.#pairMatchingModels = pairMatchingModels;
  }

  generate() {
    this.#pairMatchingModels.delete();
    OutputView.printDelete();
    this.#mainController.selectFunction();
  }
}

module.exports = DeleteController;
