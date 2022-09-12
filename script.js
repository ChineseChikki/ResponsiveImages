/* Toggle between adding and removing the "btn" class to nav when the user clicks on the icon */
'use strict';

const btn = document.getElementById('btn');
const menu = document.getElementById('mobileMenu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
  console.log(btn);
});

// function btn() {
//   console.log('alert');
// }
// const btn = document.getElementsByClassName('btn')
// const btn = document.querySelector('.btn')
// const btn = document.querySelectorAll('btn')
// const btn = document.getElementById('btn')
