'use strict';

const { name } = require('commander');
const { log } = require('console');

/*
	дополнить объект методами для получения имени:
	- компании
	- ceo
	- сотрудника
*/

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      printName() {
        console.log(this.name);
      },
    },
  ],
  ceo: {
    name: 'Вася',
    printName() {
      console.log(this.name);
    },
  },
  printName() {
    console.log(this.name);
  },
};

company.printName();
