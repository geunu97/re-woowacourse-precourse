const InputView = require('../view/InputView');

class RacingcarController {
  start() {
    InputView.readCars((cars) => {
      console.log(cars);
      this.tryCount();
    });
  }

  tryCount() {
    InputView.readTryCount((tryCount) => {
      console.log(tryCount);
    });
  }
}

module.exports = RacingcarController;
