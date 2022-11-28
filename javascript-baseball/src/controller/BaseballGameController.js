const BaseballGameModel = require('../model/BaseballGameModel');
const randomNumberGenerator = require('../utils/randomNumberGenerator');
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
        randomNumberGenerator.generateComputerNumbers(randomNumberGenerator.generate),
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
    console.log('3스트라이크');
  }
}

module.exports = BaseballGameController;
