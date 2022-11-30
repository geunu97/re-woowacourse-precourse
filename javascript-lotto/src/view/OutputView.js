const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoNumbers(lotto) {
    Console.print(`\n${lotto.length}개를 구입했습니다.`);
    lotto.forEach((numbers) => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  },
};

module.exports = OutputView;
