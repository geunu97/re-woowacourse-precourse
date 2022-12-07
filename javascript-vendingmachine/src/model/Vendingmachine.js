class Vendingmachine {
  #products;
  #userMoney;

  constructor(userMoney, products) {
    this.#userMoney = userMoney;
    this.#products = products;
  }

  purchase(productName) {
    this.#products.forEach((product) => {
      if (productName === product.getName()) {
        if (product.availablePurchase(this.#userMoney)) {
          this.#userMoney -= product.getPrice();
          product.purchase();
        }
      }
    });
  }

  isSoldOut() {
    let soldOut = true;
    this.#products.forEach((product) => {
      if (Number(product.getQuantity()) > 0) {
        soldOut = false;
      }
    });
    return soldOut;
  }

  availablePurchase() {
    const productPrices = [];
    this.#products.forEach((product) => productPrices.push(Number(product.getPrice())));
    const minProductPrices = productPrices.sort()[0];
    return this.#userMoney >= minProductPrices;
  }

  getUserMoney() {
    return this.#userMoney;
  }
}

module.exports = Vendingmachine;
