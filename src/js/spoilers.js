const allSpoilers = document.querySelectorAll('.spoiler-btn');
const brandsSwiper = document.querySelector('.brands__swiper');
const repairSwiper = document.querySelector('.repair__swiper');
const mainSpoilerBtn = document.querySelector('.main__spoiler-btn');
const mainSpoilerArrow = document.querySelector('.main__spoiler-arrow');
  
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

mainSpoilerBtn.addEventListener('click', () => {
    let mainArticleWrapper = document.querySelector('.main__article-wrapper');
    mainArticleWrapper.classList.toggle('open-spoiler');
    mainSpoilerArrow.classList.toggle('rotate-arrow');
});

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
