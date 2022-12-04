const RacingcarController = require('./controller/RacingcarController');

class App {
  play() {
    const racingcarController = new RacingcarController();
    racingcarController.start();
  }
}

module.exports = App;
