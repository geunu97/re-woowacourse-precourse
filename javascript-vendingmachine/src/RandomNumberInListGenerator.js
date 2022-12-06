const { Random } = require('@woowacourse/mission-utils');

const RandomNumberInListGenerator = {
  generate() {
    return Random.pickNumberInList([500, 100, 50, 10]);
  },
};

module.exports = RandomNumberInListGenerator;
