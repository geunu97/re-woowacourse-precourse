const GAME_RULE = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  LENGTH: 3,
  COMPLETE_STRIKE_COUNT: 3,
});

const COMMAND = Object.freeze({
  REPLAY: '1',
  END: '2',
});

const INPUT_MESSAGE = Object.freeze({
  USER_NUMBERS: '숫자를 입력해주세요 : ',
  FINAL_COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  STRIKE: (strike) => `${strike}스트라이크`,
  NOTHING: '낫싱',
  COMPLETE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

const ERROR_MESSAGE_HEADER = '[ERROR]';

const ERROR_MESSAGE_USER_NUMBERS = Object.freeze({
  TYPE: `${ERROR_MESSAGE_HEADER} 숫자가 아닙니다.`,
  INCLUDE_ZERO: `${ERROR_MESSAGE_HEADER} 0이 포함되어 있으면 안됩니다.`,
  DUPLICATE: `${ERROR_MESSAGE_HEADER} 중복된 수가 존재하면 안됩니다.`,
  LENGTH: `${ERROR_MESSAGE_HEADER} 길이가 3이 아닙니다.`,
});

const ERROR_MESSAGE_FINAL_COMMAND = Object.freeze({
  COMMAND: `${ERROR_MESSAGE_HEADER} 1(재시작) 또는 2(종료)를 입력해야 합니다.`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE_USER_NUMBERS,
  ERROR_MESSAGE_FINAL_COMMAND,
  GAME_RULE,
  COMMAND,
};
