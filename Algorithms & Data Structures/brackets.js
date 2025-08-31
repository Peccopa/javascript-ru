const str0 = '()';
const str1 = `()(){}`; // true
const str2 = `{}((}))`; // false
const str3 = `(()()(({}((||))){||}))`; // true
const brackets = {
  '(': ')',
  '{': '}',
  ')': '(',
  '}': '{',
  '|': '|',
};

function checkBrackets(str) {
  const arr = str.split('');
  const stack = [];

  while (arr.length > 0) {
    let cur = arr.shift();
    let top = stack.at(-1);

    if (brackets[cur] === top) {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }

  console.log(stack);
  return stack.length === 0 ? true : false;
}

console.log(checkBrackets(str3));
