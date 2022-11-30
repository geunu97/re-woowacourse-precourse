const LottoGameController = require('./controller/LottoGameController');
const User = require('./model/User');

class App {
  play() {
    const lottoGameController = new LottoGameController(new User());
    lottoGameController.start();
  }
}

module.exports = App;
