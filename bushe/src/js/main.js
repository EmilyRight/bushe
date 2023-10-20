import detectDevice from './helpers/detectDevice';
import { WOW } from './vendor/wow.min';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import GTMEvents from './helpers/gtmEvents';

/// /////// DocReady //////////
const GTM = new GTMEvents();
document.addEventListener('DOMContentLoaded', () => {
  detectDevice();
  videoTeaser();
  setPageHeight();
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
});

window.addEventListener('resize', () => {
  setPageHeight();
});
window.addEventListener('orientationchange', () => {
  setPageHeight();
});

function setPageHeight() {
  const elements = document.querySelectorAll('.js-set-size');
  elements.forEach((el) => {
    el.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  });
}
