const { Random } = require('@woowacourse/mission-utils');
const { GAME_RULE } = require('./Constant');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(GAME_RULE.MIN_NUMBER, GAME_RULE.MAX_NUMBER);
  },

  generateComputerNumbers(generateRandomNumber) {
    const computerNumbers = [];
    while (computerNumbers.length < GAME_RULE.LENGTH) {
      const randomNumber = generateRandomNumber();
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers.join('');
  },
};

module.exports = RandomNumberGenerator;
