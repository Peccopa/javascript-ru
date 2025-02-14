'use strict';

const product = { id: 1, name: 'Bread', count: 1 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProd = function (product) {
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push();
};

Cart.prototype.incrProd = function (id) {
  this.products = this.products.map((product) => {
    if (product.id === id) {
      product.count += 1;
      return product;
    }
    return product;
  });
};

Cart.prototype.decrProd = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id === id) {
        product.count -= 1;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const cart = new Cart();
cart.addProd(product);
console.log(cart);
