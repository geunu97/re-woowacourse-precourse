const Validator = {
  purchaseMoney(money) {
    if (!Number(money)) {
      throw new Error('[ERROR] 구입금액이 숫자가 아닙니다.');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액이 1000원 단위가 아닙니다.');
    }
    return true;
  },

  winningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨번호가 6개가 아닙니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨번호에 중복된 수가 존재하면 안됩니다.');
    }
    numbers.forEach((number) => {
      if (!Number(number)) {
        throw new Error('[ERROR] 당첨번호가 숫자가 아닙니다.');
      }
      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error('당첨번호가 1에서 45사이의 숫자가 아닙니다.');
      }
    });
    return true;
  },
};

module.exports = Validator;
