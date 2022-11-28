const { Console } = require('@woowacourse/mission-utils');
const BaseballGameModel = require('../model/BaseballGameModel');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BaseballGameController {
  #baseballGameModel;

  startGame() {
    OutputView.printStart();
    this.makeGame();
  }

  makeGame() {
    InputView.readUserNumbers((userNumbers) => {
      this.#baseballGameModel = new BaseballGameModel(
        RandomNumberGenerator.generateComputerNumbers(RandomNumberGenerator.generate),
        userNumbers,
      );
      this.resultGame();
    });
  }

  againInput() {
    InputView.readUserNumbers((userNumbers) => {
      this.#baseballGameModel.setUserNumbers(userNumbers);
      this.resultGame();
    });
  }

  resultGame() {
    OutputView.printStrikeAndBall(
      this.#baseballGameModel.getBall(),
      this.#baseballGameModel.getStrike(),
    );
    if (!this.#baseballGameModel.isCompletion()) {
      this.againInput();
      return;
    }
    this.completeGame();
  }

  completeGame() {
    OutputView.printComplete();
    InputView.readFinalCommand((command) => {
      if (command === '1') {
        this.makeGame();
        return;
      }
      this.end();
    });
  }

  end() {
    Console.close();
  }
}

module.exports = BaseballGameController;
