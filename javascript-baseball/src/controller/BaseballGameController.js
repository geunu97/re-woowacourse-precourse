const randomNumberGenerator = require('../utils/randomNumberGenerator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BaseballGameController {
  start() {
    OutputView.printStart();
    this.computerValue();
  }

  computerValue() {
    console.log(randomNumberGenerator.generateComputerNumbers(randomNumberGenerator.generate));
  }
}

module.exports = BaseballGameController;
