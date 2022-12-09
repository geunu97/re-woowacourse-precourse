const PairMatchingController = require('./controller/PairmatchingController');

class App {
  play() {
    const pairMatchingController = new PairMatchingController();
    pairMatchingController.start();
  }
}

module.exports = App;
