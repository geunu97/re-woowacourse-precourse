const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const FileReader = require('../utils/FileReader');
const PairMatchingMaker = require('../utils/PairMatchingMaker');
const ShuffleGenerator = require('../utils/ShuffleGenerator');

class PairMatchingController {
  start() {
    InputView.readFunctionCommand((command) => {
      if (command === '1') {
        this.inputPairMatching();
        return;
      }
    });
  }

  inputPairMatching() {
    OutputView.printPairMatching();
    InputView.readPairMatching(([course, level, mission]) => {
      if (course === '프론트엔드') {
        this.aaa('src/resources/frontend-crew.md', OutputView.printFrontendPairMatchingResult);
        return;
      }
      this.aaa('src/resources/backend-crew.md', OutputView.printBackendPairMatchingResult);
    });
  }

  aaa(src, print) {
    FileReader.read(src, (crew) => {
      const pairMatching = PairMatchingMaker.make(crew.split('\r\n'), ShuffleGenerator.generate);
      print(pairMatching);
    });
  }
}

module.exports = PairMatchingController;
