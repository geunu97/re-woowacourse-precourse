const Exception = require('./Exception');

const Validator = {
  length(value, length) {
    if (value.length > length) {
      Exception.throw(`[ERROR] 길이가 ${length}이하여야 합니다.`);
    }
  },
};

module.exports = Validator;
