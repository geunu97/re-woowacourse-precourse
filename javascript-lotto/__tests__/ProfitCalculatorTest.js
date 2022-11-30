/* eslint-disable max-lines-per-function */
const ProfitCalculator = require('../src/ProfitCalculator');

describe('수익률 계산하는 ProfitCalculator 객체 테스트', () => {
  test('총 당첨 금액을 계산한다.', () => {
    const [firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace] = [1, 0, 1, 1, 0];
    const profit = ProfitCalculator.calculate([
      firstPlace,
      secondPlace,
      thirdPlace,
      fourthPlace,
      fifthPlace,
    ]);

    expect(profit).toEqual(2001550000);
  });

  test('수익률을 계산한다.', () => {
    const profit = 5000;
    const purchaseMoney = 8000;
    const profitRate = ProfitCalculator.calculateRate(purchaseMoney, profit);

    expect(profitRate).toEqual(62.5);
  });
});
