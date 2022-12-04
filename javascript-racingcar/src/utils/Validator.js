const Exception = require('./Exception');

const Validator = {
  lengthToBeLessThan(value, length) {
    if (value.length > length) {
      Exception.throw(`[ERROR] 길이가 ${length}이하여야 합니다.`);
    }
  },

  lengthToBeGreaterThan(value, length) {
    if (value.length < length) {
      Exception.throw(`[ERROR] 길이가 ${length}이상여야 합니다.`);
    }
  },

  type(value) {
    if (!Number(value)) {
      Exception.throw('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
  },

  duplicate(value) {
    if (new Set(value).size !== value.length) {
      Exception.throw('[ERROR] 중복된 값이 존재하면 안됩니다.');
    }
  },

  blank(value) {
    if (value === ' ') {
      Exception.throw('[ERROR] 공백만 존재하면 안됩니다.');
    }
  },
};

module.exports = Validator;
