const allSpoilers = document.querySelectorAll('.spoiler-btn');
const brandsSwiper = document.querySelector('.brands__swiper');
const repairSwiper = document.querySelector('.repair__swiper');
const mainSpoilerBtn = document.querySelector('.main__spoiler-btn');
const mainSpoilerArrow = document.querySelector('.main__spoiler-arrow');
  
const rotateArrow = function(elem) {
    let arrow = elem.querySelector('.spoiler-arrow');
    arrow.classList.toggle('rotate-arrow');
}


const openSpoilerAndRotate = function(element, openClass, button) {
    let text = button.querySelector('span');
    element.classList.toggle(openClass);

    if (text.textContent === 'Показать все') {
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать все';
    }
    rotateArrow(button);
};

mainSpoilerBtn.addEventListener('click', () => {
    let mainArticleWrapper = document.querySelector('.main__article-wrapper');
    mainArticleWrapper.classList.toggle('open-spoiler');
    mainSpoilerArrow.classList.toggle('rotate-arrow');
});

allSpoilers.forEach(elem => {
    elem.addEventListener('click', () => {
        const openClass = 'open-spoiler';
        if (elem.parentNode.classList.contains('brands')) {
            openSpoilerAndRotate(brandsSwiper, openClass, elem);
        } else if (elem.parentNode.classList.contains('repair')) {
            openSpoilerAndRotate(repairSwiper, openClass, elem);
        }
    });
  });
