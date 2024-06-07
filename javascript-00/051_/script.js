let str = 'The greatest victory is that which requires no battle';
// "battle no requires which that is victory greatest The"

function reverseWords(str) {
  str = str.split(' ').reverse().join(' ');
  return str; // reverse those words
}

console.log(reverseWords(str));
