const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(0, 9);
  },
};

module.exports = RandomNumberGenerator;
