const { Random } = require('@woowacourse/mission-utils');

const RandomUniqueNumbersGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
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
