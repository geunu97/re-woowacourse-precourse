const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const FileReader = require('../utils/FileReader');
const PairMatchingMaker = require('../utils/PairMatchingMaker');
const ShuffleGenerator = require('../utils/ShuffleGenerator');

class PairMatchingController {
  start() {
    InputView.readFunctionCommand((command) => {
      if (command === '1') {
        this.pairMatching();
        return;
      }
    });
  }

  pairMatching() {
    OutputView.printPairMatching();
    InputView.readPairMatching((command) => {
      //
      FileReader.read('src/resources/backend-crew.md', (crew) => {
        console.log(PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate));
      });
    });
  }
}

module.exports = PairMatchingController;
