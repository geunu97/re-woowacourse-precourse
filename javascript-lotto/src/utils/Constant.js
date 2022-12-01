const GAME_RULE = Object.freeze({
  MONEY_UNIT: 1000,
  NUMBERS_LENGTH: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PERCENT: 100,
});

const PRIZE_MONEY = Object.freeze({
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

const MACHING_COUNT = Object.freeze({
  FIRST_PLACE: 6,
  SECOND_PLACE: 5,
  THIRD_PLACE: 5,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 3,
});

const INPUT_MESSAGE = Object.freeze({
  PURCHASE_MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  LOTTO_LENGTH: (length) => `\n${length}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(', ')}]`,
  STATISTICS: '\n당첨 통계\n---',
  FIRST_PLACE: (firstPlace) => `6개 일치 (2,000,000,000원) - ${firstPlace}개`,
  SECOND_PLACE: (secondPlace) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondPlace}개`,
  THIRD_PLACE: (thirdPlace) => `5개 일치 (1,500,000원) - ${thirdPlace}개`,
  FOURTH_PLACE: (fourthPlace) => `4개 일치 (50,000원) - ${fourthPlace}개`,
  FIFTH_PLACE: (fifthPlace) => `3개 일치 (5,000원) - ${fifthPlace}개`,
  PROFIT: (profitRate) => `총 수익률은 ${profitRate.toFixed(1)}%입니다.`,
});

const ERROR_MESSAGE_HEADER = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  TYPE: `${ERROR_MESSAGE_HEADER} 숫자가 아닙니다.`,
  RANGE: `${ERROR_MESSAGE_HEADER} 1에서 45사이의 숫자가 아닙니다.`,
  LENGTH: (length) => `${ERROR_MESSAGE_HEADER} 길이가 ${length}이 아닙니다.`,
  DUPLICATE: `${ERROR_MESSAGE_HEADER} 중복된 수가 존재하면 안됩니다.`,
  UNIT: `${ERROR_MESSAGE_HEADER} 1000원 단위가 아닙니다.`,
});

module.exports = {
  ERROR_MESSAGE_HEADER,
  MACHING_COUNT,
  PRIZE_MONEY,
  GAME_RULE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
};
