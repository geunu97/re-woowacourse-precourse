const { Random } = require('@woowacourse/mission-utils');
const { GAME_RULE } = require('./utils/Constant');

const RandomUniqueNumbersGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      GAME_RULE.MIN_NUMBER,
      GAME_RULE.MAX_NUMBER,
      GAME_RULE.NUMBERS_LENGTH,
    );
  },

  sort(numbers) {
    return numbers.sort((prevNumber, nextNumber) => {
      if (prevNumber > nextNumber) {
        return 1;
      }
      return -1;
    });
  },

  convertType(numbers) {
    return numbers.map((number) => String(number));
  },
};

module.exports = RandomUniqueNumbersGenerator;
