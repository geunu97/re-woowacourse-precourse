const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printPairMatching() {
    Console.print(
      '\n#############################################\n과정: 백엔드 | 프론트엔드\n미션:\n- 레벨1: 자동차경주 | 로또 | 숫자야구게임\n- 레벨2: 장바구니 | 결제 | 지하철노선도\n- 레벨3:\n- 레벨4: 성능개선 | 배포\n- 레벨5:\n############################################',
    );
  },

  printFrontendPairMatchingResult(crew) {
    Console.print('\n페어 매칭 결과입니다.');
    crew.slice(0, -2).forEach((pair) => {
      Console.print(pair.join(' : '));
    });
    Console.print([...crew[crew.length - 2], crew[crew.length - 1][0]].join(' : '));
  },

  printBackendPairMatchingResult(crew) {
    Console.print('\n페어 매칭 결과입니다.');
    crew.forEach((pair) => {
      Console.print(pair.join(' : '));
    });
  },

  printDelete() {
    Console.print('\n초기화 되었습니다.\n');
  },
};

module.exports = OutputView;
