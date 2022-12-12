const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const PairMatchingGameModels = require('../model/PairMatchingGameModels');
const PairMatchingController = require('./PairMatchingController');
const SearchController = require('./SearchController');
const DeleteController = require('./DeleteController');
const TargetModel = require('../model/TargetModel');

class MainController {
  #pairMatchingGameModels;
  #targetModel;

  #pairMatchingController;
  #searchController;
  #deleteController;

  constructor() {
    this.#pairMatchingGameModels = new PairMatchingGameModels();
    this.#targetModel = new TargetModel(this.#pairMatchingGameModels);

    this.#pairMatchingController = new PairMatchingController(this, this.#pairMatchingGameModels, this.#targetModel);
    this.#searchController = new SearchController(this, this.#targetModel);
    this.#deleteController = new DeleteController(this, this.#pairMatchingGameModels);
  }

  selectFunction() {
    InputView.readFunctionCommand((command) => {
      if (command === '1' || command === '2') {
        OutputView.printPairMatching();
        this.inputPairMatchingInfo(command);
        return;
      }
      if (command === '3') {
        this.#deleteController.generate();
        return;
      }
      this.end();
    });
  }

  inputPairMatchingInfo(command) {
    InputView.readPairMatchingInfo(([course, level, mission]) => {
      this.#targetModel.setModel(course, level, mission);
      if (command === '1') {
        this.#pairMatchingController.makeModel(course, level, mission);
        return;
      }
      this.#searchController.generate(course);
    });
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

  end() {
    Console.close();
  }
}

module.exports = MainController;
