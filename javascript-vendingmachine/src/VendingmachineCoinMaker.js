const VendingmachineCoinMaker = {
  make(money, randomNumberInListGenerator) {
    let remainingMoney = money;
    const vendingmachineCoins = [];

    while (remainingMoney) {
      const randomNumber = randomNumberInListGenerator();
      if (randomNumber <= remainingMoney) {
        vendingmachineCoins.push(randomNumber);
        remainingMoney -= randomNumber;
      }
    }
    return vendingmachineCoins;
  },
};

module.exports = VendingmachineCoinMaker;
