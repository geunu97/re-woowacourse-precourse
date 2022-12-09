const { Random } = require('@woowacourse/mission-utils');

const ShuffleGenerator = {
  generate(array) {
    return Random.shuffle(array);
  },
};

module.exports = ShuffleGenerator;
