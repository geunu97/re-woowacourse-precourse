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

  lengthToBeEqual(value, length) {
    if (value.length !== length) {
      Exception.throw(`[ERROR] 길이가 ${length}이 아닙니다.`);
    }
  },

  lengthToBeGreaterThan(value, length) {
    if (value.length < length) {
      Exception.throw(`[ERROR] 길이가 ${length}이상여야 합니다.`);
    }
  },

  blank(value) {
    if (value === ' ' || value === '') {
      Exception.throw('[ERROR] 공백만 존재하면 안됩니다.');
    }
  },

  range(value) {
    if (Number(value) < 100) {
      Exception.throw('[ERROR] 범위는 100이상이여야 합니다.');
    }
  },
};

module.exports = Validator;
