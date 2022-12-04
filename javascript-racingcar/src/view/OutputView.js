const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printResult({ name, position }) {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  },
};

module.exports = OutputView;
