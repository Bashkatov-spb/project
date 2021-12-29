const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const containers = document.querySelectorAll('.container');

const bluringElements = function(elements) {
  elements.forEach(elem => {
    elem.style.opacity = 0.1;
  });
};

const unBluringElements = function(elements) {
  elements.forEach(elem => {
    elem.style.opacity = 1;
  });
};

btnOpen.addEventListener('click', function() {
  menu.classList.add('open');
  bluringElements(containers);
});
btnClose.addEventListener('click', function() {
  menu.classList.remove('open');
  unBluringElements(containers); 
});

menuItems.forEach(elem => {
  elem.addEventListener('click', () => {
    menuItems.forEach(item => {
      item.classList.remove('menu__item--active');
    });
    elem.classList.add('menu__item--active');
  });
});

console.log('Menu');