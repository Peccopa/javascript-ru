const test1 = [1, 2, 3, 4, 5];
const test2 = Array(5, 4, 3, 2, 1);

Array.prototype.filter = function (fn, thisArg = this) {
  let arr = new Array(this.length);
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let item = fn.call(thisArg, this[i], i, this);
    if (i in this && item) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(test1.filter((x) => x >= 3));
console.log(test2.filter((x) => x <= 3));

// it("should properly handle filter's context", function() {
const base_array = [2, 4];
let sum_is_even = base_array.filter(function (x) {
  return (x + this) % 2 == 0;
}, 2);
//   Test.assertSimilar(sum_is_even, [2, 4], "Oh no! The callback received the wrong context!");
