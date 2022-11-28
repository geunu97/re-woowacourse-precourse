const BaseballGameController = require('./controller/BaseballGameController');

class App {
  play() {
    const baseballGameController = new BaseballGameController();
    baseballGameController.startGame();
  }
}

module.exports = App;
