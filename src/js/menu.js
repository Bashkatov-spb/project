const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

const menu = document.querySelector('.menu');
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

console.log('Menu');