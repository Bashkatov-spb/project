const allSpoilers = document.querySelectorAll('.spoiler-btn');
const brandsSwiper = document.querySelector('.brands__swiper');
const repairSwiper = document.querySelector('.repair__swiper');
  
const rotateArrow = function(elem) {
    let arrow = elem.querySelector('.spoiler-arrow');
    arrow.classList.toggle('rotate-arrow');
}

const changeSpoiler = function(spoilerClass) {
    let spoiler = document.querySelector(spoilerClass);
    if (spoiler.textContent === 'Показать все') {
        spoiler.textContent = 'Скрыть';
    } else {
        spoiler.textContent = 'Показать все';
    }
};

allSpoilers.forEach(elem => {
    elem.addEventListener('click', () => {
        console.log(elem);
        if (elem.parentNode.classList.contains('brands')) {
            brandsSwiper.classList.toggle('open-spoiler');
            changeSpoiler('.spoiler-text--brands');
            rotateArrow(elem);
        } else if (elem.parentNode.classList.contains('repair')) {
            repairSwiper.classList.toggle('open-spoiler');
            changeSpoiler('.spoiler-text--repair');
            rotateArrow(elem);
        }
    });
  });

console.log('spoilers');