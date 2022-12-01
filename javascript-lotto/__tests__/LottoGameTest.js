/* eslint-disable max-lines-per-function */
const Lotto = require('../src/Lotto');
const User = require('../src/model/User');

describe('로또 게임 테스트', () => {
  winningNumbers = ['1', '2', '3', '4', '5', '6'];
  bonusNumber = '7';
  const lotto = new Lotto(winningNumbers);
  lotto.updateNumbers(bonusNumber);

  test('로또 번호가 오름차순으로 발행된다.', () => {
    const user = new User(0);
    const lottoNumbers = user.purchaseLotto();

    for (let index = 0; index < 5; index += 1) {
      expect(Number(lottoNumbers[index])).toBeLessThan(Number(lottoNumbers[index + 1]));
    }
  });

  test('구입 금액 1000원당 로또 1장을 발행한다.', () => {
    const purchaseMoney = 3000;
    const user = new User(purchaseMoney);

    user.purchaseLottoTimes();
    expect(user.getLottoNumbers()).toHaveLength(3);
  });

  test('일치하는 보너스 번호와 당첨 번호 갯수를 구한다.', () => {
    userNumbers = ['1', '2', '3', '4', '5', '7'];

    expect(lotto.matchWinningNumbers(userNumbers)).toEqual(5);
    expect(lotto.matchBonusNumber(userNumbers)).toEqual(1);
  });

  test('일치하는 갯수에 맞게 등수를 구한다.', () => {
    const counts = [
      [6, 0],
      [5, 1],
      [5, 0],
      [4, 0],
      [3, 0],
    ];

    counts.forEach((count, index) => {
      expect(lotto.getLank(count)).toEqual(index);
    });
  });

  test('일치하는 보너스 번호와 당첨 번호 갯수를 모두 구한다.', () => {
    userAllNumbers = [
      ['1', '2', '3', '4', '5', '7'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '43', '42'],
    ];
    const counts = [
      [5, 1],
      [6, 0],
      [4, 0],
    ];

    expect(lotto.getMatchingCount(userAllNumbers)).toEqual(counts);
  });

  test('일치하는 갯수에 맞게 당첨된 등수를 모두 구한다.', () => {
    const counts = [
      [5, 1],
      [6, 0],
      [5, 0],
      [4, 0],
      [2, 0],
    ];

    expect(lotto.getLanks(counts)).toEqual([1, 1, 1, 1, 0]);
  });
});
