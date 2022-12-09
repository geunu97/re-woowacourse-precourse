const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printPairMatching() {
    Console.print(
      '#############################################\n과정: 백엔드 | 프론트엔드\n미션:\n- 레벨1: 자동차경주 | 로또 | 숫자야구게임\n- 레벨2: 장바구니 | 결제 | 지하철노선도\n- 레벨3:\n- 레벨4: 성능개선 | 배포\n- 레벨5:\n############################################',
    );
  },
};

module.exports = OutputView;
