'use strict';
function greet(name, owner) {
  return 'Hello ' + (name === owner ? 'boss' : 'guest');
}

console.log(greet('11', '11'));
