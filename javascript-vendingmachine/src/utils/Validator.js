const Exception = require('./Exception');

const Validator = {
  type(value) {
    if (!Number(value)) {
      Exception.throw('[ERROR] 금액은 숫자여야 합니다.');
    }
  },

  unit(value, unit) {
    if (Number(value) % unit !== 0) {
      Exception.throw(`[ERROR] 금액은 ${unit}단위여야 합니다.`);
    }
  },
};

module.exports = Validator;
