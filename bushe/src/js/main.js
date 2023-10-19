import detectDevice from './helpers/detectDevice';

import { generateId } from './helpers/utils';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';

/// /////// DocReady //////////
const page = document.querySelector('.page');
window.addEventListener('load', () => {
  detectDevice();
  videoTeaser();

  setPageheight();
  const pageView = new Page(page);
  const buttonMore = document.querySelector('.teaser-more');
  buttonMore.addEventListener('click', () => {
    pageView.init();
  });

  // const loader = document.querySelector('.loader');
  // const controls = document.querySelector('.swiper-controls');
  // const hiddenList = document.querySelectorAll('.hidden');
  // console.log(hiddenList);
  // loader.addEventListener('animationend', () => {
  //   hiddenList.forEach((element) => {
  //     element.classList.remove('hidden');
  //     element.classList.add('visible');

  //     controls.classList.add('displayed');
  //     createSlider();
  //   });
  //   addAnimationClass();
  //   handleAnimation();
  // });
});

window.addEventListener('resize', () => {
  setPageheight();
});
window.addEventListener('orientationchange', () => {
  setPageheight();
});
function setPageheight() {
  page.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}
