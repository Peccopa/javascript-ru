'use strict';

// Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
// Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

// Test data (for inserting into the textarea including spaces):

// underscore_case
//   first_name
// next_Variable
//    Calculate_AGE
// arrived_flight

// This output should appear (5 separate console.log outputs):
// underscoreCase
// firstName
// nextVariable
// calculateAge
// arrivedFlight

// Hints:
// 1.	Remember which character defines a newline in a textbox
// 2.	The solution should only work for a two-word variable like first_second
// 3.	This is a tricky task, so start watching the solution in case you get stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.textContent = 'Send';
textarea.textContent = `
underscore_case
  first_name
next_Variable
   Calculate_AGE
arrived_flight
`;
button.addEventListener('click', convertInputText);

function convertInputText() {
  const text = textarea.value.split('\n');
  for (let item of text) {
    if (item.length === 0) continue;
    let itemArr = item.trim().toLowerCase().split('_');
    itemArr[1] = itemArr[1][0].toUpperCase() + itemArr[1].slice(1);
    console.log(itemArr.join(''));
  }

  // console.log(text);
}

console.log(textarea);
console.log(button);
