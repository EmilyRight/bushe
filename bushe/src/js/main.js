import detectDevice from './helpers/detectDevice';
import { WOW } from './vendor/wow.min';
import { generateId, getCurrentYear } from './helpers/utils';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';
import GTMEvents from './helpers/gtmEvents';

/// /////// DocReady //////////
const GTM = new GTMEvents();
document.addEventListener('DOMContentLoaded', () => {
  detectDevice();
  videoTeaser();
  setPageheight();
  const page = document.querySelector('.page');
  const pageView = new Page(page, GTM);
  const buttonMore = document.querySelector('.teaser-more');
  console.log('====================================');
  console.log(pageView, buttonMore, page);
  console.log('====================================');
  buttonMore.addEventListener('click', () => {
    console.log('hey click');
    GTM.handleScreen('teaser');
    pageView.init();
  });
  GTM.addEventListeners();
  new WOW().init();
  // getCurrentYear();
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
