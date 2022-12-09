const Exception = require('./Exception');

const Validator = {
  existingValue(value, array) {
    let existence = false;
    array.forEach((confirmingValue) => {
      if (value === confirmingValue) {
        existence = true;
      }
    });
    if (!existence) {
      Exception.throw('[ERROR] 유효한 값이 아닙니다.');
    }
  },
};

module.exports = Validator;
