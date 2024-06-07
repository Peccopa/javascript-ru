/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; // <-- expression

const myObject = { // <-- expression
  x: 10,
  y: true,
};

myObject.z = 'abc'; // <-- expression

delete myObject.x; // <-- expression

let newVariable; // <-- expression

newVariable = 30 + 5;  // <-- expression

console.log(newVariable);  // <-- expression

if (newVariable > 10) {  // <-- statement
  console.log(`${newVariable} больше 10`);
}
