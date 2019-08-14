'use strict';
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation');
let parenthesisBtns = document.querySelectorAll('.parenthesis')
let clearBtns = document.querySelectorAll('.clear')
let decimalBtn = document.getElementById('decimal');
let resultBtn = document.getElementById('result');
let howWorkBtn = document.getElementById('howWorkBtn');



for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', numberPress);
};

for (let i=0; i<operations.length; i++) {
  let operationBtn = operations[i];
  operationBtn.addEventListener('click', operation);
};

for (let i=0; i<clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.srcElement.id);
  });
};

for (let i=0; i<parenthesisBtns.length; i++) {
  let parenthesisBtn = parenthesisBtns[i];
  parenthesisBtn.addEventListener('click', parenthesis);
};

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

howWorkBtn.addEventListener('click', howWork);



function numberPress() {
  console.log('Клик по кнопке с номером');
};

function operation(arg) {
  console.log('Клик по кнопке с операцией');
};

function decimal(arg) {
  console.log('Клик по кнопке .');
};

function clear(id) {
  console.log(`Клик по кнопке ${id}`);
};

function result(arg) {
  console.log('Клик по кнопке result');
};

function howWork(arg) {
  console.log('Клик по кнопке ?');
};

function parenthesis() {
  console.log('Клик по кнопке ()');
};
