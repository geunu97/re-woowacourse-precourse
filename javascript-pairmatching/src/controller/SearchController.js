const { Console } = require('@woowacourse/mission-utils');
const Exception = require('../utils/Exception');

class SearchController {
  #mainController;
  #targetPairMatchingModel;

  constructor(mainController, targetPairMatchingModel) {
    this.#mainController = mainController;
    this.#targetPairMatchingModel = targetPairMatchingModel;
  }

  isExisting() {
    if (!this.#targetPairMatchingModel.getModel()) {
      Exception.throw('[ERROR] 매칭 이력이 없습니다.');
      return false;
    }
    return true;
  }

  generate(course) {
    try {
      if (this.isExisting()) {
        this.#mainController.outputResult(course, this.#targetPairMatchingModel.getModel().getResult().getCurrentResult());
      }
    } catch (error) {
      Console.print(error);
      this.#mainController.inputPairMatchingInfo('2');
    }
  }
}

module.exports = SearchController;
