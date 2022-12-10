const Exception = require('./Exception');

const Validator = {
  existingValue(targetValue, array) {
    let existence = false;
    array.forEach((value) => {
      if (targetValue === value) {
        existence = true;
      }
    });
    if (!existence) {
      Exception.throw('[ERROR] 유효한 값이 아닙니다.');
    }
  },

  lengthToBeEqual(value, length) {
    if (value.length !== length) {
      Exception.throw(`[ERROR] 길이가 ${length}이 아닙니다.`);
    }
  },
};

module.exports = Validator;
