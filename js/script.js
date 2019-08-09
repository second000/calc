// 'use strict'
// let buttons= document.querySelectorAll('button');
// let display = document.getElementById('display');
//
// let userClick = function(el) {
//   let value = el.target.textContent;
//   display.value = value;
// }
//
// for (let i = 0; i < buttons.length; i++) {
//   let button = buttons[i];
//   button.addEventListener('click', userClick);
// }
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation');
let decimalBtn = document.getElementById('decimal');
let ce = document.getElementById('ce');
let c = document.getElementById('c');
let result = document.getElementById('result');
let howWorkBtn = document.getElementById('howWorkBtn');


for (let i=0; i<numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    console.log('!');
});
};

for (let i=0; i<operations.length; i++) {
  let operation = operations[i];
  operation.addEventListener('click', function (e) {
    console.log('!');
});
};

decimalBtn.addEventListener('click', function (e) {
  console.log('!');
});

ce.addEventListener('click', function (e) {
  console.log('!');
});

c.addEventListener('click', function (e) {
  console.log('!');
});

result.addEventListener('click', function (e) {
  console.log('!');
});

howWorkBtn.addEventListener('click', function (e) {
  console.log('!');
});

function numberPress() {

};

function operation(arg) {

};

function decimal(arg) {

};

function clear(arg) {

};

function howWork(arg) {

};
