const { Random } = require('@woowacourse/mission-utils');
const { GAME_RULE } = require('./Constant');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(GAME_RULE.MIN_NUMBER, GAME_RULE.MAX_NUMBER);
  },
};

module.exports = RandomNumberGenerator;
