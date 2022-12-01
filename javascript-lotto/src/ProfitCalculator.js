const { PRIZE_MONEY, GAME_RULE } = require('./utils/Constant');

const ProfitCalculator = {
  calculate([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    const profit = [
      firstPlace * PRIZE_MONEY.FIRST_PLACE,
      secondPlace * PRIZE_MONEY.SECOND_PLACE,
      thirdPlace * PRIZE_MONEY.THIRD_PLACE,
      fourthPlace * PRIZE_MONEY.FOURTH_PLACE,
      fifthPlace * PRIZE_MONEY.FIFTH_PLACE,
    ];
    return profit.reduce((sum, currentValue) => sum + currentValue, 0);
  },

  calculateRate(purchaseMoney, profit) {
    return (profit / purchaseMoney) * GAME_RULE.PERCENT;
  },
};

module.exports = ProfitCalculator;
