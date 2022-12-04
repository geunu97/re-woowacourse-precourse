const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(`최종 우승자: ${winner.join(', ')}`);
  },
};

module.exports = OutputView;
