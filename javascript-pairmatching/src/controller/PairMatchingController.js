const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class PairMatchingController {
  start() {
    InputView.readFunctionCommand((command) => {
      if (command === '1') {
        OutputView.printPairMatching();
        return;
      }
    });
  }
}

module.exports = PairMatchingController;
