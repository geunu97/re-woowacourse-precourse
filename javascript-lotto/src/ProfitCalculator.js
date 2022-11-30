const ProfitCalculator = {
  calculate([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    const profit = [
      firstPlace * 2000000000,
      secondPlace * 30000000,
      thirdPlace * 1500000,
      fourthPlace * 50000,
      fifthPlace * 5000,
    ];
    return profit.reduce((sum, currentValue) => sum + currentValue, 0);
  },

  calculateRate(purchaseMoney, profit) {
    return (profit / purchaseMoney) * 100;
  },
};

module.exports = ProfitCalculator;
