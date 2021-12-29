const brandsSwiper = document.querySelector('.brands__swiper');
const repairSwiper = document.querySelector('.repair__swiper');
const priceSwiper = document.querySelector('.price__swiper');

const brandsSwiperPagination = document.querySelector('.brands__swiper-pagination');
const repairSwiperPagination = document.querySelector('.repair__swiper-pagination');
const priceSwiperPagination = document.querySelector('.price__swiper-pagination');

let firstDataSizeSwiper = [1.25, 1.5, 2, 2.3, 2.6, 16];
let lastDataSizeSwiper = [1.15, 1.4, 1.8, 2.1, 2.5, 8];

function swiperCreation(swiperClass, paginationClass, arr) {
  return new Swiper(swiperClass, {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: paginationClass,
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: arr[0]
      },
      400: {
        slidesPerView: arr[1]
      },
      500: {
        slidesPerView: arr[2]
      },
      600: {
        slidesPerView: arr[3]
      },
      700: {
        slidesPerView: arr[4]
      }
    },
    slidesOffsetBefore: arr[5]
  });
}

const swiper1 = swiperCreation(brandsSwiper, brandsSwiperPagination, firstDataSizeSwiper);
const swiper2 = swiperCreation(repairSwiper, repairSwiperPagination, firstDataSizeSwiper);
const swiper3 = swiperCreation(priceSwiper, priceSwiperPagination, lastDataSizeSwiper);

const destroySwipers = function() {
    swiper1.destroy();
    swiper2.destroy();
    swiper3.destroy();
  };
  
function checkSize() {
    window.addEventListener('resize', function() {
        if (window.outerWidth > 767) {
        destroySwipers();
        } 
    });
    if (window.outerWidth > 767) {
        destroySwipers();
    } 
}

checkSize();

console.log('swipers');