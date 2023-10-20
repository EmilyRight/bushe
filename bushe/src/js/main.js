import detectDevice from './helpers/detectDevice';

import { generateId, getCurrentYear } from './helpers/utils';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';
import GTMEvents from './helpers/gtmEvents';

/// /////// DocReady //////////
const GTM = new GTMEvents();
const page = document.querySelector('.page');
window.addEventListener('load', () => {
  detectDevice();
  videoTeaser();

  setPageheight();
  const pageView = new Page(page, GTM);
  const buttonMore = document.querySelector('.teaser-more');
  buttonMore.addEventListener('click', () => {
    GTM.handleScreen('teaser');
    pageView.init();
  });
  GTM.addEventListeners();
  getCurrentYear();
  // const loader = document.querySelector('.loader');
  // const controls = document.querySelector('.swiper-controls');
  // const hiddenList = document.querySelectorAll('.hidden');
  // const teaser = document.querySelector('.teaser');
  // loader.addEventListener('animationend', () => {
  //   teaser.remove();
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
  const elements = document.querySelectorAll('.js-set-size');
  elements.forEach((el) => {
    el.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  });
}
