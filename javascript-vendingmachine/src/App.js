const VendingmachineController = require('./controller/VendingmachineController');

class App {
  play() {
    const vendingmachineController = new VendingmachineController();
    vendingmachineController.start();
  }
}

module.exports = App;
