const { GAME_RULE, ERROR_MESSAGE } = require('./Constant');

const Validator = {
  type(value) {
    if (!Number(value)) {
      throw new Error(ERROR_MESSAGE.TYPE);
    }
  },

  range(value) {
    if (Number(value) < GAME_RULE.MIN_NUMBER || Number(value) > GAME_RULE.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  },

  length(value, length) {
    if (value.length !== length) {
      throw new Error(ERROR_MESSAGE.LENGTH(length));
    }
  },

  duplicate(value) {
    if (new Set(value).size !== value.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  },

  unit(value, unit) {
    if (Number(value) % unit !== 0) {
      throw new Error(ERROR_MESSAGE.UNIT);
    }
  },
};

module.exports = Validator;
