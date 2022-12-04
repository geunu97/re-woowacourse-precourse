const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printResult({ name, position }) {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  },

  printWinner(winner) {
    Console.print(`최종 우승자: ${winner.join(', ')}`);
  },
};

module.exports = OutputView;
