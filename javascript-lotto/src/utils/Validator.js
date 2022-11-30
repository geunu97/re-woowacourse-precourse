const Validator = {
  type(value) {
    if (!Number(value)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
  },

  range(value) {
    if (Number(value) < 1 || Number(value) > 45) {
      throw new Error('1에서 45사이의 숫자가 아닙니다.');
    }
  },

  length(value, length) {
    if (value.length !== length) {
      throw new Error(`[ERROR] 길이가 ${length}이 아닙니다.`);
    }
  },

  duplicate(value) {
    if (new Set(value).size !== value.length) {
      throw new Error('[ERROR] 중복된 수가 존재하면 안됩니다.');
    }
  },

  unit(value, unit) {
    if (Number(value) % unit !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
  },
};

module.exports = Validator;
