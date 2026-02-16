// Task: Filter and Sort Products
// Filter products that are in stock, sort by price (ascending), and return only name and price.

const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Shirt', price: 30, inStock: true },
];

const result = products
  .filter((product) => product.inStock)
  .sort((a, b) => a.price - b.price)
  .map((product) => ({ name: product.name, price: product.price }));

console.log(result);
const obj = {};
