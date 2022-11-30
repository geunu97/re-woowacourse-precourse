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
};

module.exports = Validator;
