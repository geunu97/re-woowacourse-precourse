const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/Constant');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printStrikeAndBall(ball, strike) {
    if (ball && strike) {
      Console.print(OUTPUT_MESSAGE.BALL_STRIKE(ball, strike));
      return;
    }
    if (ball) {
      Console.print(OUTPUT_MESSAGE.BALL(ball));
      return;
    }
    if (strike) {
      Console.print(OUTPUT_MESSAGE.STRIKE(strike));
      return;
    }
    Console.print(OUTPUT_MESSAGE.NOTHING);
  },

  printComplete() {
    Console.print(OUTPUT_MESSAGE.COMPLETE);
  },
};

module.exports = OutputView;
