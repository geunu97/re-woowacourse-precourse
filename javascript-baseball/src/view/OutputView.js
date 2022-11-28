const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printStrikeAndBall(ball, strike) {
    if (ball && strike) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return;
    }
    if (ball) {
      Console.print(`${ball}볼`);
      return;
    }
    if (strike) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    Console.print('낫싱');
  },
};

module.exports = OutputView;
