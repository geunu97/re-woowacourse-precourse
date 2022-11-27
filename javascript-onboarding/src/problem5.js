function problem5(money) {
  return convertMoney(money, [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]);
}

const convertMoney = (remainingMoney, moneyArray) => {
  return moneyArray.map((money) => {
    const dividedMoney = Math.floor(remainingMoney / money);
    remainingMoney = remainingMoney % money;
    return dividedMoney;
  });
};

module.exports = problem5;
