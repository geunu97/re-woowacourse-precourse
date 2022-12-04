const { Random } = require('@woowacourse/mission-utils');

const randomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(0, 9);
  },
};

module.exports = randomNumberGenerator;
