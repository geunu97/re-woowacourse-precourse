const InputView = require('../view/InputView');

class PairMatchingController {
  start() {
    InputView.readFunctionCommand((command) => {
      console.log(command);
    });
  }
}

module.exports = PairMatchingController;
