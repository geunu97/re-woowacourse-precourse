class Product {
  #name;
  #price;
  #quantity;

  constructor([name, price, quantity]) {
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  availablePurchase(userMoney) {
    return this.#price <= userMoney && this.#quantity !== 0;
  }

  purchase() {
    this.#quantity -= 1;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getQuantity() {
    return this.#quantity;
  }
}

module.exports = Product;

// 보유 금액보다 해당 상품이 더 비쌀 때
// 해당 상품의 수량이 0일 때
/**
 *   availablePurchase(userMoney) {
    return this.#price <= userMoney && this.#quantity !== 0;
  }
 */
