'use strict';

// const age = +prompt('Age?');
const age = 45;

switch (true) {
  case age < 45: {
    console.log('Too young!');
    break;
  }
  case age > 45: {
    console.log('Too old!');
    break;
  }
  default: {
    console.log('45');
    break;
  }
}
