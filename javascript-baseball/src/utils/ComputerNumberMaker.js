const { GAME_RULE } = require('./Constant');

const ComputerNumberMaker = {
  make(generateRandomNumber) {
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

module.exports = ComputerNumberMaker;
