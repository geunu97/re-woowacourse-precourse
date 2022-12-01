const LottoGameController = require('./controller/LottoGameController');

class App {
  play() {
    const lottoGameController = new LottoGameController();
    lottoGameController.start();
  }
}

module.exports = App;
