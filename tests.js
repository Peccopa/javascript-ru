function monkeyCount(n) {
  return new Array(n).fill(0).reduce((a, v) => (v = a + 1));
}

console.log(monkeyCount(5));
