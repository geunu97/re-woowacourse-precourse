const Validator = require('./Validator');

const InputValidator = {
  functionCommand(value) {
    Validator.existingValue(value, ['1', '2', '3', 'Q']);
  },

  pairMatchingInfo(value) {
    Validator.lengthToBeEqual(value, 3);

    const [course, level, mission] = value;
    InputValidator.course(course);
    InputValidator.level(level);
    InputValidator.mission(mission);
  },

  course(value) {
    Validator.existingValue(value, ['백엔드', '프론트엔드']);
  },

  level(value) {
    Validator.existingValue(value, ['레벨1', '레벨2', '레벨4']);
  },

  mission(value) {
    Validator.existingValue(value, [
      '자동차경주',
      '로또',
      '숫자야구게임',
      '장바구니',
      '결제',
      '지하철노선도',
      '성능개선',
      '배포',
    ]);
  },

  reMatching(value) {
    Validator.existingValue(value, ['네', '아니오']);
  },
};

module.exports = InputValidator;
