const MainController = require('./controller/MainController');

class App {
  constructor() {
    this.mainController = new MainController();
  }

  play() {
    this.mainController.selectFunction();
  }
}

module.exports = App;
