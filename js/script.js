'use strict'
let buttons= document.querySelectorAll('button');
let display = document.getElementById('display');

let userClick = function(el) {
  let value = el.target.textContent;
  display.value = value;
}

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', userClick);
}
