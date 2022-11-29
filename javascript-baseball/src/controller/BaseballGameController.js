const { Console } = require('@woowacourse/mission-utils');
const BaseballGameModel = require('../model/BaseballGameModel');
const ComputerNumberMaker = require('../utils/ComputerNumberMaker');
const { COMMAND } = require('../utils/Constant');
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
        ComputerNumberMaker.make(RandomNumberGenerator.generate),
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
      if (command === COMMAND.REPLAY) {
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
