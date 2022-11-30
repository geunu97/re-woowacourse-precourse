const { Random } = require('@woowacourse/mission-utils');

const RandomUniqueNumbersGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = RandomUniqueNumbersGenerator;
