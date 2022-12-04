const InputView = require('../view/InputView');

class RacingcarController {
  start() {
    InputView.readCars((cars) => {
      console.log(cars);
    });
  }
}

module.exports = RacingcarController;
