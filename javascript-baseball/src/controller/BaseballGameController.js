const BaseballGameModel = require('../model/BaseballGameModel');
const randomNumberGenerator = require('../utils/randomNumberGenerator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BaseballGameController {
  #baseballGameModel;

  start() {
    OutputView.printStart();
    this.makeBaseballGame();
  }

  makeBaseballGame() {
    const computerNumbers = randomNumberGenerator.generateComputerNumbers(
      randomNumberGenerator.generate,
    );
    InputView.readUserNumbers((userNumbers) => {
      this.#baseballGameModel = new BaseballGameModel(computerNumbers, userNumbers);
      console.log(computerNumbers, '컴퓨터');
      console.log(userNumbers, '사용자');
      console.log(this.#baseballGameModel.getStrike());
    });
  }
}

module.exports = BaseballGameController;
