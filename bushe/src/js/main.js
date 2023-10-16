import $ from 'jquery';
import { WOW } from './vendor/wow.min';
import detectDevice from './helpers/detectDevice';

import { generateId } from './helpers/utils';
import GTMEvents from './helpers/gtmEvents';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';

const GTM = new GTMEvents();

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();
  new WOW().init();

  const page = document.querySelector('.page');
  const pageView = new Page(page);
  pageView.init();
  const loader = document.querySelector('.loader');
  const controls = document.querySelector('.swiper-controls');
  const hiddenList = document.querySelectorAll('.hidden');
  console.log(hiddenList);
  // this.createSlider();
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



  document.addEventListener('click', (ev) => { console.log(ev.target); });
  GTM.addEventListeners();
  scrollTeaser(document.querySelector('.section-about'));
  // videoTeaser();
});

// function handleTooltip() {
//   const tooltipList = document.querySelectorAll('.tooltip');
//   const tooltipIcons = document.querySelectorAll('.tooltip-icon');
//   tooltipIcons.forEach((icon) => {
//     icon.addEventListener('click', () => {
//       const currentTooltip = Array.from(tooltipList)
//         .filter((tooltip) => tooltip.id === icon.dataset.tooltip)[0];
//       currentTooltip.classList.toggle('opened');
//     });
//   });
// }

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}

// scroll to next if URL contains #about

function scrollTeaser(el) {
  if (window.location.hash === '#about') {
    scrollToElement(el);
  }
}
