const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/Constant');

const OutputView = {
  printLottoNumbers(lotto) {
    Console.print(OUTPUT_MESSAGE.LOTTO_LENGTH(lotto.length));
    lotto.forEach((numbers) => {
      Console.print(OUTPUT_MESSAGE.LOTTO_NUMBERS(numbers));
    });
  },

  printStatistics([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print(OUTPUT_MESSAGE.FIFTH_PLACE(fifthPlace));
    Console.print(OUTPUT_MESSAGE.FOURTH_PLACE(fourthPlace));
    Console.print(OUTPUT_MESSAGE.THIRD_PLACE(thirdPlace));
    Console.print(OUTPUT_MESSAGE.SECOND_PLACE(secondPlace));
    Console.print(OUTPUT_MESSAGE.FIRST_PLACE(firstPlace));
  },

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGE.PROFIT(profitRate));
  },
};

module.exports = OutputView;
