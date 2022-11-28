const { Random } = require('@woowacourse/mission-utils');

const randomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(1, 9);
  },

  generateComputerNumbers(generateRandomNumber) {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const randomNumber = generateRandomNumber();
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers.join('');
  },
};

module.exports = randomNumberGenerator;
