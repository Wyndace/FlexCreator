'use strict';
//Переменные
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const items = document.querySelectorAll('.item');
const jcontent = document.querySelector('#jcontent');
const wrapper = document.querySelector('.wrapper');
const dflex = document.querySelector('#dflex');
const fwrap = document.querySelector('#fwrap');

//Всё, что не является функцией здесь
width.addEventListener('input', () => {
  for (const item of items) {
      item.style.width = width.value + 'px';
       item.innerHTML = `${width.value}x${height.value}`;
  }
});

height.addEventListener('input', () => {
  for (const item of items) {
      item.style.height = height.value + 'px';
      item.innerHTML = `${width.value}x${height.value}`;
  }
});

jcontent.addEventListener('change', () => {
  wrapper.style.justifyContent = jcontent.value;
});

dflex.addEventListener('change', () => {
  if (dflex.checked){
    wrapper.style.display = 'flex';
  } else {
    wrapper.style.display = 'block';
  }
});

fwrap.addEventListener('change', () => {
  if (fwrap.checked){
    wrapper.style.flexWrap = 'wrap';
  } else {
    wrapper.style.flexWrap = 'nowrap';
  }
});