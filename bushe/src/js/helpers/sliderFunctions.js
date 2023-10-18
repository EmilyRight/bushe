/* eslint-disable import/no-cycle */
// import sliderView from '../main';
import Swiper from '../vendor/swiper.min';

const options = {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: false,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  // slideVisibleClass: 'visible',
  spaceBetween: 0,
  loop: false,
  breakpoints: {
    768: {
      spaceBetween: 0,
    },
  },
};
let swiper = null;

function createSlider() {
  const slider = document.querySelector('.swiper-wrapper');
  const viewWidth = document.documentElement.clientWidth;
  console.log(viewWidth);
  swiper = new Swiper('.swiper-container', options);
  if (viewWidth < 992) {
    swiper.init();
  } else {
    destroySlider(swiper);
  }
}

function addAnimationClass() {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) {
    activeSlide.classList.add('animated');
  }
}
function handleAnimation() {
  if (swiper) {
    swiper.on('transitionEnd', () => {
      console.log('slideChange');
      addAnimationClass();
    });
  }

  // swiper.on('transitionEnd', () => {
  //   console.log('transitionEnd');
  //   addAnimationClass();
  // });
}

function destroySlider(slider) {
  slider.destroy();
}

export {
  createSlider, destroySlider, handleAnimation, addAnimationClass,
};
