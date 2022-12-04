const Exception = require('./Exception');

const Validator = {
  length(value, length) {
    if (value.length > length) {
      Exception.throw(`[ERROR] 길이가 ${length}이하여야 합니다.`);
    }
  },
  type(value) {
    if (!Number(value)) {
      Exception.throw('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
  },
};

module.exports = Validator;
