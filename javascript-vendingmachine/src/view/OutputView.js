const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printVendingmachineCoin(coins) {
    Console.print('\n자판기가 보유한 동전');
    Console.print(`500원 - ${coins[0]}개`);
    Console.print(`100원 - ${coins[1]}개`);
    Console.print(`50원 - ${coins[2]}개`);
    Console.print(`10원 - ${coins[3]}개`);
  },
};

module.exports = OutputView;
